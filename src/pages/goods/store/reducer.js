import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({list: []}), action) => {
    if (action.type === constants.CHANGE_DATA) {
        return state.set("list",action.data);
    }
    return state;
}
