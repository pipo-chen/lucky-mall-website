import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({isAdd: false, options : []}), action) => {
    if (action.type === constants.ADD_GOODS) {
        
        return state.set("isAdd", action.data);
    }
    if (action.type === constants.CHANGE_OPTION) {
        return state.set("options", action.options);
    }
    return state;
}
