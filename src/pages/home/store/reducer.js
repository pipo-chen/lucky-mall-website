import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({mouse: false, index: "5"}), action) => {
    if (action.type === constants.MOUSE_ENTER) {
        return state.set("mouse",true);
    }
    if (action.type === constants.MOUSE_LEAVE) {
        return state.set("mouse", false)
    }
    if (action.type === constants.SELECT_NAV) {
        return state.set("index", action.index)
    }
    return state;
}
