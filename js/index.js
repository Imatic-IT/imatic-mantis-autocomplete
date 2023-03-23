import * as u from './utils';
import * as cache from './cache';

let resultCache = cache.create();
const max_len = 191;
let destroyListFn;

function flatArraysEqual(v1, v2) {
    if (v1 == null || v2 == null) {
        return v1 == null && v2 == null;
    }

    if (v1.length !== v2.length) {
        return false;
    }

    for (let i = 0; i < v1.length; i++) {
        if (v1[i] !== v2[i]) {
            return false;
        }
    }

    return true;
}

function openAutocompleteListEl({
                                    completions,
                                    onSelect,
                                    focusInput,
                                    onRestyle,
                                    input,
                                }) {
    closeAutocompleteListEl();

    let focused = 0;

    const completionEls = completions.map((v) => {
        const text = document.createTextNode(v);

        const li = document.createElement('li');
        li.setAttribute('tabindex', -1);
        li.appendChild(text);

        return li;
    });

    const ul = document.createElement('ul');
    ul.className = 'imatic-autocomplete';
    ul.setAttribute('id', 'imaticAutocompleteWidget');
    ul.setAttribute('tabindex', -1);
    completionEls.forEach((el) => ul.appendChild(el));

    const controlKeys = new Set(['ArrowDown', 'ArrowUp', 'Enter', 'Tab']);

    ul.addEventListener('keydown', (e) => {
        if (!controlKeys.has(e.code)) {
            return;
        }

        e.preventDefault(); // prevent scrolling

        switch (e.code) {
            case 'ArrowUp': {
                const newActive = ul.querySelector(`li:nth-child(${focused})`);
                if (newActive) {
                    focused--;
                    newActive.focus();
                } else {
                    focusInput();
                }
                break;
            }
            case 'ArrowDown': {
                const newActive = ul.querySelector(
                    `li:nth-child(${focused + 2})`
                );
                if (newActive) {
                    focused++;
                    newActive.focus();
                }
            }
                break;
            case 'Enter': {
                if (onSelect) {
                    function removeIconFromName(nameWithIcon) {
                        return nameWithIcon.replace(/.*\s/, "");
                      }
                      const nameWithoutIcon = removeIconFromName(completions[focused]);
                      onSelect({val: nameWithoutIcon});
                      closeAutocompleteListEl();
                }
            }
                break;
            case 'Tab': {
                e.preventDefault()
                if (onSelect) {
                    function removeIconFromName(nameWithIcon) {
                        return nameWithIcon.replace(/.*\s/, "");
                      }
                      const nameWithoutIcon = removeIconFromName(completions[focused]);
                      onSelect({val: nameWithoutIcon});
                      closeAutocompleteListEl();
                }
            }
        }
    });

    ul.addEventListener('focus', (e) => {
        const firstLi = ul.querySelector('li');
        focused = 0;
        if (firstLi) {
            firstLi.focus();
        }
    });

    const restyle = () => onRestyle(ul);

    const closeIfOutsideTarget = (e) => {
        if (e.target === input || e.target === ul || ul.contains(e.target)) {
            return;
        }

        closeAutocompleteListEl();
    };

    const scContainer = input.closest('.table-responsive');

    window.addEventListener('scroll', restyle);
    window.addEventListener('resize', restyle);
    input.addEventListener('scroll', restyle);
    if (scContainer) {
        scContainer.addEventListener('scroll', restyle);
    }
    window.addEventListener('click', closeIfOutsideTarget);
    window.addEventListener('focusin', closeIfOutsideTarget);

    destroyListFn = () => {
        window.removeEventListener('scroll', restyle);
        window.removeEventListener('resize', restyle);
        input.removeEventListener('scroll', restyle);
        if (scContainer) {
            scContainer.removeEventListener('scroll', restyle);
        }
        window.removeEventListener('click', closeIfOutsideTarget);
        window.removeEventListener('focusin', closeIfOutsideTarget);
    };

    document.body.appendChild(ul);

    restyle();
}

function closeAutocompleteListEl() {
    const el = document.querySelector('#imaticAutocompleteWidget');
    if (el) {
        destroyListFn();
        el.remove();
    }
}

function focusAutocompleteList() {
    const el = document.querySelector('#imaticAutocompleteWidget');
    if (!el) {
        return;
    }

    el.focus();
}

function autocomplete(el) {
    let autocompleting = false;
    let startSel = 0;
    let activeCompletions = null;

    function stopAutocomplete() {
        if (!autocompleting) {
            return;
        }

        autocompleting = false;
        closeAutocompleteListEl();
    }

    function getSelectionLength() {
        return el.selectionStart - startSel;
    }

    function getSelection() {
        const len = getSelectionLength();
        const selection = el.value.substr(startSel, len);

        if (selection.length === 0 || selection.match(/[\n ]/) != null) {
            return null;
        }

        return selection;
    }

    const handleChange = () => {
        if (el.selectionStart === 0) {
            stopAutocomplete();
            return;
        }

        if (el.value[el.selectionStart - 1] === '@') {
            autocompleting = true;
            startSel = el.selectionStart;
            activeCompletions = null;
            return;
        }

        if (autocompleting) {
            const v = getSelection();
            if (v == null) {
                stopAutocomplete();
                return;
            }

            const receiveCompletions = () => {
                const completions = cache.getBestMatch(
                    resultCache,
                    getSelection()
                );
                if (
                    completions == null ||
                    completions.length === 0 ||
                    !autocompleting
                ) {
                    closeAutocompleteListEl();
                    activeCompletions = null;
                    return;
                }

                if (flatArraysEqual(activeCompletions, completions)) {
                    return;
                }

                const len = getSelectionLength();
                activeCompletions = completions;

                openAutocompleteListEl({
                    completions: completions,
                    input: el,
                    focusInput: () => {
                        const requiredSel = startSel + len;
                        el.focus();
                        el.setSelectionRange(requiredSel, requiredSel);
                    },
                    onSelect: ({val}) => {
                        if (!autocompleting) {
                            return;
                        }

                        const requiredSel = startSel + len;
                        const replaceTo = startSel + getSelection().length;

                        el.focus();
                        el.setRangeText(
                            val.substr(len)+ ' ', // ' ' whitespace after inserted @user
                            requiredSel,
                            replaceTo,
                            'end'
                        );
                        autocompleting = false
                    },
                    onRestyle: (listEl) => {
                        const listPos = el.getBoundingClientRect();
                        const elStyles = getComputedStyle(el);

                        const textHeight = u.textSize(
                            elStyles,
                            el.value.substr(0, el.selectionStart)
                        ).height;

                        listEl.style.position = 'fixed';
                        listEl.style.left = Math.max(0, listPos.x) + 'px';
                        listEl.style.top =
                            listPos.y + textHeight + 5 - el.scrollTop + 'px';
                        listEl.style.width = el.clientWidth + 'px';
                    },
                });
            };

            if (cache.has(resultCache, v)) {
                return receiveCompletions(cache.get(resultCache, v));
            }

            let handlersSelect = document.querySelectorAll('select[name="handler_id"]');
            let completions = [];

            for (let i = 0; i < handlersSelect.length; i++) {
                let options = handlersSelect[i].options;
                for (let j = 0; j < options.length; j++) {
                    completions.push(options[j].textContent);
                }
            }

            completions = completions.filter(function (handler) {
                return handler !== "[Myself]" && handler !== "[Reporter]";
            });

            filterUsersByString(v, completions)


            function filterUsersByString(v, users) {

                let filteredUsers = users.filter(function (user) {

                    if (user.replace(/.*\s/, "").indexOf(v) === 0) {
                        return user.includes(v);
                      }
                });

                resultCache = cache.set(resultCache, v, filteredUsers);
                receiveCompletions();
            }
        }
    };

    el.addEventListener('keydown', (e) => {
        if (!autocompleting) {
            return;
        }

        switch (e.code) {
            case 'ArrowDown':
                e.preventDefault(); // prevent scrolling
                focusAutocompleteList();
                break;
            case 'ArrowUp':
                stopAutocomplete();
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                // make sure that element has correct selection
                setTimeout(() => handleChange(), 0);
                break;
            case'Tab':{
                e.preventDefault();
                if (!autocompleting) {
                    return;
                }
                focusAutocompleteList();

                const len = getSelectionLength();
                const firstChild = document.querySelector('#imaticAutocompleteWidget').firstChild;

                if (firstChild) {
                    // Remove role icon
                    const textValue = firstChild.textContent.replace(/.*\s/, "");;
                    const requiredSel = startSel + len;
                    const replaceTo = startSel + getSelection().length;

                    el.focus();
                    el.setRangeText(
                        textValue.substr(len)+ ' ', // ' ' whitespace after inserted @user
                        requiredSel,
                        replaceTo,
                        'end'
                    );
                    closeAutocompleteListEl();

                    autocompleting = false
                }
            }
            break;
        }
        if (e.code === 'ArrowDown') {
            focusAutocompleteList();
        }
    });
    el.addEventListener('input', (e) => {
        handleChange();
    });
}


document
    .querySelectorAll(
        '#bugnote_text, #description, #steps_to_reproduce, #additional_info, #summary, #additional_information'
    )
    .forEach((el) => {
        autocomplete(el);
    });