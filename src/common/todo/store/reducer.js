import * as constants from './constants'
import { fromJS } from 'immutable'

export default (state = {inputValue:'init', list:["item1","item2"]} , action) => {
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

    return state;
}
