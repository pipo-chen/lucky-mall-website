import * as constants from '../store/constants'
import axios from 'axios';

export const getInputAction = (value) => ({
    type: constants.CHANGE_INPUT_VALUE,
    value
});

export const getHandleClickAction = ()=> ({
    type: constants.ADD_ITEM
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

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: data
})

export const getList = ()=> {
    return(dispatch) => {
        axios.get('/admin/test.do').then((res)=>{
            const data = res.data.data;
            const action = changeList(data);
            dispatch(action);
        }).catch(()=> {
            console.log("error");
        })
    }
}