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

export const changeAddParent = (isAdd) => ({
    type : constants.ADD_PARENT_CATEGORY,
    isAdd : isAdd
})

export const changeAddChild = (isAdd) => ({
    type : constants.ADD_CHILD_CATEGORY,
    isAdd : isAdd
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
        
        axios.post('/category/get_deep_category.do', formdata).then((res) => {
            if (res.data.status == 0) {
                const action = getSecondCategoryList(res.data.data, categoryId);
                dispatch(action);
            }
        })
    }
}

export const addCategory = (parentId, categoryName)=> {
    return(dispatch) => {
        const formdata = new FormData();
        formdata.append("parentId", parentId);
        formdata.append("categoryName",categoryName);
        console.log("--->",parentId, categoryName);
        axios.post("/category/add_category.do", formdata).then((res) => {
            alert(res.data.msg);
            if (res.data.status == 0) {
                //隐藏输入框
                const action = selectSecondCategoryList(parentId);
                dispatch(action);
                
            }
        })
    }

}

export const deleteCategory = (parentId, categoryId) => {
    return(dispatch) => {
        const formdata = new FormData();
        formdata.append("categoryId", categoryId);

        axios.post("/category/delete_category.do", formdata).then((res) => {
            alert(res.data.msg);
            if (res.data.status == 0) {
                //隐藏输入框
                const action = selectSecondCategoryList(parentId);
                dispatch(action);
                
            }
        })
    }
}
