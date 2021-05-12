import * as constants from '../store/constants'

export const getInputAction = (value) => ({
    type: constants.CHANGE_INPUT_VALUE,
    value
});

export const getHandleClickAction = ()=> ({
   
    type: constants.GET_LIST
});

export const getHandleDeleteAction = (index)=> ({
    type: constants.DELETE_ITEM,
    index
});

export const getBlurAction = ()=>({
    type: constants.BLUR_ITEM
});

export const getFocusAction =() => ({
    type: constants.FOCUS_ITEM
});