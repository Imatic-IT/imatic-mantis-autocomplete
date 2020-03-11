let controller;
const _autocompleteUrl = autocompleteUrl();
const max_len = 191;
let destroyListFn;

function textSize(computedStyle, text) {
    const span = document.createElement('span');
    span.textContent = text;

    const div = document.createElement('div');
    div.appendChild(span);
    Array.from(computedStyle).forEach(function(key) {
        div.style.setProperty(
            key,
            computedStyle.getPropertyValue(key),
            computedStyle.getPropertyPriority(key)
        );
    });
    div.style.visibility = 'hidden';
    document.body.appendChild(div);

    const data = {width: span.offsetWidth, height: span.offsetHeight};

    div.remove();

    return data;
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

    const completionEls = completions.map(v => {
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
    completionEls.forEach(el => ul.appendChild(el));

    const controlKeys = new Set(['ArrowDown', 'ArrowUp', 'Enter']);

    ul.addEventListener('keydown', e => {
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
            case 'ArrowDown':
                {
                    const newActive = ul.querySelector(
                        `li:nth-child(${focused + 2})`
                    );
                    if (newActive) {
                        focused++;
                        newActive.focus();
                    }
                }
                break;
            case 'Enter':
                {
                    if (onSelect) {
                        onSelect({val: completions[focused]});
                    }
                    closeAutocompleteListEl();
                }
                break;
        }
    });

    ul.addEventListener('focus', e => {
        const firstLi = ul.querySelector('li');
        focused = 0;
        if (firstLi) {
            firstLi.focus();
        }
    });

    const restyle = () => onRestyle(ul);

    const closeIfOutsideTarget = e => {
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

    function stopAutocomplete() {
        if (!autocompleting) {
            return;
        }

        autocompleting = false;
        closeAutocompleteListEl();
    }

    const handleChange = () => {
        if (el.selectionStart === 0) {
            stopAutocomplete();
            return;
        }

        if (autocompleting) {
            const len = el.selectionStart - startSel;
            if (len < 0 || len > max_len) {
                stopAutocomplete();
                return;
            }

            if (el.value[el.selectionStart - 1] === '@') {
                autocompleting = true;
                startSel = el.selectionStart;
                return;
            }

            const v = el.value.substr(startSel, len);
            if (v.match(/[\n ]/) != null) {
                stopAutocomplete();
                return;
            }

            if (v.length > 0) {
                if (controller) {
                    controller.abort();
                }

                controller = new AbortController();
                closeAutocompleteListEl();

                fetch(searchUrl(v), {
                    signal: controller.signal,
                })
                    .then(res => res.json())
                    .then(completions => {
                        if (completions.length === 0) {
                            return;
                        }

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
                                el.focus();
                                el.setRangeText(
                                    val.substr(len),
                                    requiredSel,
                                    requiredSel,
                                    'end'
                                );
                            },
                            onRestyle: listEl => {
                                const listPos = el.getBoundingClientRect();
                                const elStyles = getComputedStyle(el);

                                const textHeight = textSize(
                                    elStyles,
                                    el.value.substr(0, el.selectionStart)
                                ).height;

                                listEl.style.position = 'fixed';
                                listEl.style.left =
                                    Math.max(0, listPos.x) + 'px';
                                listEl.style.top =
                                    listPos.y +
                                    textHeight +
                                    5 -
                                    el.scrollTop +
                                    'px';
                                listEl.style.width = el.clientWidth + 'px';
                            },
                        });
                    });
            }
        } else if (el.value[el.selectionStart - 1] === '@') {
            autocompleting = true;
            startSel = el.selectionStart;
        }
    };

    el.addEventListener('keydown', e => {
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
        }
        if (e.code === 'ArrowDown') {
            focusAutocompleteList();
        }
    });
    el.addEventListener('input', e => {
        handleChange();
    });
}

function autocompleteUrl() {
    const el = document.querySelector('[data-imatic-autocomplete-url]');
    if (el === null) {
        return null;
    }

    return el.dataset.imaticAutocompleteUrl;
}

function searchUrl(s) {
    const url = new URL(_autocompleteUrl, location.href);
    url.searchParams.append('search', s);

    return url;
}

if (_autocompleteUrl != null) {
    document
        .querySelectorAll(
            '#bugnote_text, #description, #steps_to_reproduce, #additional_info, #summary, #additional_information'
        )
        .forEach(el => {
            autocomplete(el);
        });
}
