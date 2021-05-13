import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({login: false}), action) => {
    if (action.type === constants.CHANGE_LOGIN) {
        return state.set("login",action.value);
    }
    return state;
}
