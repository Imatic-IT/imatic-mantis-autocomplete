/**
 * @param {CSSStyleDeclaration} computedStyle
 * @param {string} text
 *
 * @returns {{width: number, height: number}}
 */
export function textSize(computedStyle, text) {
    const span = document.createElement('span');
    span.textContent = text;

    const div = document.createElement('div');
    div.appendChild(span);
    Array.from(computedStyle).forEach(function (key) {
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
