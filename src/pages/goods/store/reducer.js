import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({isAdd: false, options : [],data:{}, isModify: false}), action) => {
    if (action.type === constants.ADD_GOODS) {
        return state.set("isAdd", action.data)
    }
    if (action.type === constants.UPDATE_GOODS) {
        return state.set("isModify", action.data)
    }
    if (action.type === constants.BACK_HOME) {
        return state.merge({
            isModify: false,
            isAdd: false
        })
    }
    if (action.type === constants.CHANGE_OPTION) {
        return state.set("options", action.options);
    }
    if (action.type === constants.MODIFY_INFO) {
        return state.merge ({
            isModify: true,
            data: action.info
        });
    }
    return state;
}
