import { combineReducers } from 'redux';
import TodoReducer from '../pages/todo/store/reducer'
import LoginReducer from '../pages/login/store/reducer'
import RegisterReducer from '../pages/register/store/reducer'

export default combineReducers({
    todo: TodoReducer,
    login: LoginReducer,
    register: RegisterReducer
});
