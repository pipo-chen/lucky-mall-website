import axios from 'axios'
import * as constants from './constants'

const changeData = (data) => ({
    type: constants.SELECT_LIST,
    data : data
})

export const updateItem = (item, isUpdate) => ({
    type: constants.UPDATE_ITEM,
    item: item,
    isUpdate : isUpdate
})

export const updateCarouselInfo = (carouselId, carouselUrl, redirectUrl, carouselRank)=> {
    return(dispatch) => {
        const f = new FormData();
        f.append('carouselId', carouselId);
        f.append('carouselUrl', carouselUrl);
        f.append('redirectUrl', redirectUrl);
        f.append('carouselRank', carouselRank);
        axios.post('carousel/update.do', f).then((res) => {
            alert(res.data.msg);
            if (res.data.status == 0) {
                const action = getList();
                dispatch(action);
            }
        })
    }
}

export const deleteItem = (carouselId) => {
    return(dispatch) => {
        const f = new FormData();
        f.append('carouselId', carouselId);
        axios.post('/carousel/delete.do',f).then((res) => {
            alert(res.data.msg);
            if (res.data.status == 0) {
                const action = getList();
                dispatch(action);
            }
        })
    }
}
// pageNum: "1", pageSize: "5"
export const getList = (pageNum = "1", pageSize = "5") => {
    
    return(dispatch) => {
        const f = new FormData()
        f.append('pageNum',pageNum)
        f.append('pageSize',pageSize)
        
        axios.post('/carousel/list.do',f).then((res)=>{
            if (res.data.status == 0) {
                const action = changeData(res.data.data);
                dispatch(action);
            } else {
                alert(res.data.msg)
            }
        });
        
    }
}