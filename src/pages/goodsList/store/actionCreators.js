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

export const changeInfo = (info) => ({
    type: constants.CHANGE_INFO,
    info : info
});

export const deleteItem = (item) => {
    return(dispatch) => {
        const formdata = new FormData();
        formdata.append('goodsId',item["goodsId"]);
        axios.post("/goods/delete.do", formdata).then (res=>{
            alert(res.data.msg);
            if (res.data.status == 0) {
                const action = changeInfo(item);
                dispatch(action)
            }
        })
    }
}
export const changeSoldState = (state, item) => {
    return(dispatch) => {
        const formdata = new FormData();
        formdata.append('goodsId',item["goodsId"]);
        formdata.append('goodsName',item["goodsName"]);
        formdata.append('goodsIntro',item["goodsIntro"]);
        formdata.append('goodsCategoryId',item["goodsCategoryId"]);
        formdata.append('goodsCoverImg',item["goodsCoverImg"]);
        formdata.append('goodsCarousel',item["goodsCarousel"]);
        formdata.append('goodsDetailContent',item["goodsDetailContent"]);
        formdata.append('originalPrice',item["originalPrice"]);
        formdata.append('sellingPrice',item["sellingPrice"]);
        formdata.append('stockNum',item["stockNum"]);
        formdata.append('tag',item["tag"]);
        //注意传递的变化参数也要跟着改变
        if (state === constants.SOLD_OUT) {
            formdata.append("goodsSellStatus","1")
            item["goodsSellStatus"] = "1";
        } else {
            formdata.append("goodsSellStatus","0")
            item["goodsSellStatus"] = "0";
        }
        formdata.append("createUser", "0");
        axios.post("/goods/changeGoodsInfo.do", formdata).then (res=>{
            alert(res.data.msg);
            if (res.data.status == 0) {
                const action = changeInfo(item);
                dispatch(action)
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