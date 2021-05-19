import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({isRegister: false}), action) => {
    if (action.type === constants.REGISTER) {
        return state.set('isRegister', action.value);
    }
    return state;

}