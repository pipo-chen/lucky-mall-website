import * as constants from './constants'

export default (state = {inputValue:'init', list:["item1","item2"], focused: true} , action) => {
    if (action.type === constants.CHANGE_INPUT_VALUE)  {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        
        return newState;
    }
    if (action.type === constants.ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === constants.DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === constants.BLUR_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState;
    }
    if (action.type === constants.FOCUS_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return newState;
    }
    if (action.type === constants.CHANGE_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(...action.data);
        return newState;
    }

    return state;
}
