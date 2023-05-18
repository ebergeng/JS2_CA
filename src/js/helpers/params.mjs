export function getParams(data) {
    const params = new URLSearchParams(window.location.search);
    return params.get(data)
}