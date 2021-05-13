import { combineReducers } from 'redux';
import TodoReducer from '../pages/todo/store/reducer'

export default combineReducers({
    todo: TodoReducer
});
