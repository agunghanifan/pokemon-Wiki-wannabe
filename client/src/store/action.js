export function addToFavorites(payload) {
    return { type: 'favorites/addFavorites', payload}
}
export function setFetchLink(payload) {
    return { type: "fetchLink/setFetchLink", payload }
}
export function setPokemons(payload) {
    return { type: "pokemons/setPokemons", payload}
}
export function deleteFavorite(payload) {
    return { type: "favorites/deleteFavorite", payload }
}
export function setDetails(payload) {
    return { type: "details/setDetails", payload }
}