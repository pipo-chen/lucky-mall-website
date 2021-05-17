import axios from 'axios'
import * as constants from './constants'

const changeData = (data) => ({
    type: constants.CHANGE_DATA,
    data: data
});

export const selectAllOrNot = (isSelectAll) => ({
    type: constants.SELECT_ALL,
    isSelectAll : isSelectAll
});

export const selectGoodsId = (goodsId) => ({
    type: constants.SELECT_GOODSID,
    goodsId : goodsId
});

export const getList = (pageNum, pageSize) => {
    return(dispatch) => {
        console.log(pageNum, pageSize)
        const f = new FormData()
        f.append('pageNum',pageNum)
        f.append('pageSize',pageSize)
        
        axios.post('/goods/list.do',f).then((res)=>{
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