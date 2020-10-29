import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

const reducer = combineReducers({
    posts: postsReducer
})

export default reducer