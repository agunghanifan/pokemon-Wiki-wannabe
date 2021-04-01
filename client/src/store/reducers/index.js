import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducer'
import pokemonsReducer from './pokemonsReducer'

const reducer = combineReducers({
    favoritesReducer,
    pokemonsReducer
})

export default reducer