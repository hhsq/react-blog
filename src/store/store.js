import { combineReducers } from 'redux'
import blogContent from './reducers/blogContent'
import isShowNav from './reducers/isShowNav'

export default combineReducers({
    blogContent,
    isShowNav
})