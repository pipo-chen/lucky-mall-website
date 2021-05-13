import * as constants from './constants'
import {fromJS} from 'immutable'

export default (state = fromJS({inputValue:'init', list:["item1","item2"], focused: true}) , action) => {
    if (action.type === constants.CHANGE_INPUT_VALUE)  {
        return state.set("inputValue", action.value);
    }
    if (action.type === constants.ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        return state.set("list", newState.list)
    }
    if (action.type === constants.DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return state.set("list", newState.list)
    }
    if (action.type === constants.BLUR_ITEM) {
        return state.set("focused", false);
    }
    if (action.type === constants.FOCUS_ITEM) {
        return state.set("focused", true);
    }
    if (action.type === constants.CHANGE_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(...action.data);
        return state.set("list", newState.list)
    }

    return state;
}
