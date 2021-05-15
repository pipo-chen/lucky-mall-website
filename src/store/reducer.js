import { combineReducers } from 'redux';
import TodoReducer from '../pages/todo/store/reducer'
import LoginReducer from '../pages/login/store/reducer'
import RegisterReducer from '../pages/register/store/reducer'
import HomeReducer from '../pages/home/store/reducer'
import GoodsReducer from '../pages/goods/store/reducer'

export default combineReducers({
    todo: TodoReducer,
    login: LoginReducer,
    register: RegisterReducer,
    home: HomeReducer,
    goods: GoodsReducer
});
