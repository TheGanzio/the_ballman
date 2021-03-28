import {combineReducers} from 'redux'

import posts from './posts'
import genre from './genres'

const rootReducers = combineReducers({
    posts,
    genre
})

export default rootReducers