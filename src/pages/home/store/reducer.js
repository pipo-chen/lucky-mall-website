import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({mouse: false}), action) => {
    if (action.type === constants.MOUSE_ENTER) {
        return state.set("mouse",true);
    }
    if (action.type === constants.MOUSE_LEAVE) {
        return state.set("mouse", false)
    }
    return state;
}
