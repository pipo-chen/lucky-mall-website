import { combineReducers } from 'redux';
import TodoReducer from '../todo/store/reducer'

export default combineReducers({
    todo: TodoReducer
});
