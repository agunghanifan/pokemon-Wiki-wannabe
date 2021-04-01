export function addToFavorites(payload) {
    return { type: 'favorites/addFavorites', payload}
}
export function deleteFavorite(payload) {
    return { type: "favorites/deleteFavorite", payload }
}
export function setDetails(payload) {
    return { type: "details/setDetails", payload }
}
export function setLoading(payload) {
    return { type: "loading/setLoading", payload}
}
export function setError(payload) {
    return { type: "error/setError", payload }
}
export function setLoadingDetails(payload) {
    return { type: "loadingDetails/setLoading", payload}
}
export function setLoadingCards(payload) {
    return { type: "loadingCards/setLoading", payload}
}