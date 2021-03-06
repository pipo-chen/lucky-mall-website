import axios from 'axios'
import * as constants from './constants'

const changeData = (data) => ({
    type: constants.GET_USER_LIST,
    data: data
});

export const lockedItem = (locked, userId) => {
    return(dispatch) => {
        const f = new FormData();
        if (locked == 0) {
            f.append("locked","1")
        } else {
            f.append("locked","0")
        }
        f.append('adminUserId',userId);
        axios.post('/admin/changeLocked.do', f).then((res) => {
            alert(res.data.msg);
            if (res.data.status == 0) {
                const action = getList();
                dispatch(action);
            } 
        })
    }
}

export const deleteItem = (userId) => {
    return(dispatch) => {
        
        const f = new FormData()
        f.append('adminUserId',userId)
        
        axios.post('/admin/delete.do',f).then((res)=>{
            alert(res.data.msg)
            if (res.data.status == 0) {
                const action = getList();
                dispatch(action);
            } 
        });
    }
}

export const getList = (pageNum = "1", pageSize = "5") => {
    
    return(dispatch) => {
        console.log("refresh")
        const f = new FormData()
        f.append('pageNum',pageNum)
        f.append('pageSize',pageSize)
        
        axios.post('/admin/list.do',f).then((res)=>{
            if (res.data.status == 0) {
                console.log(res.data.msg);
                const action = changeData(res.data.data);
                dispatch(action);
            } else {
                alert(res.data.msg)
            }
        });
        
    }
}