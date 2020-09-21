export function create() {
    return {};
}

export function set(cache, term, value) {
    return Object.assign({}, cache, {[term]: value});
}

export function get(cache, term) {
    return cache[term];
}

export function has(cache, term) {
    return get(cache, term) != null;
}

export function getBestMatch(cache, term) {
    for (let i = term.length; i > 0; i--) {
        const res = get(cache, term.substr(0, i));
        if (res != null) {
            return res;
        }
    }
}
