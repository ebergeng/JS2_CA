export function getParams(data) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(data);
}