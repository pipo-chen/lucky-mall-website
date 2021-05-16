import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({isAdd: false}), action) => {
    if (action.type === constants.ADD_GOODS) {
        
        return state.set("isAdd", action.data);

    }
    return state;
}
