import axios from 'axios'
import * as constants from './constants'

const getBasicCategoryList = (list) => ({
    type: constants.BASIC_CATEGORY_LIST,
    list: list
})

const getSecondCategoryList = (list, id) => ({
    type: constants.SECOND_CATEGPRY_LIST,
    list: list,
    parentId : id
})

export const selectCategoryList = () => {
    return(dispatch) => {
        axios.post('/category/get_basic_category.do').then((res)=>{
            
            if (res.data.status == 0) {
                const action = getBasicCategoryList(res.data.data);
                dispatch(action)
            } 
        });
    }
}

export const selectSecondCategoryList = (categoryId) => {
    return(dispatch) => {
        const formdata = new FormData();
        formdata.append('categoryId',categoryId);
        console.log("-->",categoryId);
        axios.post('/category/get_deep_category.do', formdata).then((res) => {
            if (res.data.status == 0) {
                const action = getSecondCategoryList(res.data.data, categoryId);
                dispatch(action);
            }
        })
    }
}
