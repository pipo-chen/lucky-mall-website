import axios from 'axios'
import * as constants from './constants'
import qs from 'qs';

export const changeAddStatue = (res) => ({
    type: constants.ADD_GOODS,
    data: res
});

export const addGoodsInfo = (goodsName, goodsIntro, goodsCoverImg,goodsCarousel, goodsDetailContent, originalPrice,sellingPrice,stockNum,tag) => {
    return(dispatch) => {
    
        const formdata = new FormData();
        formdata.append('goodsName',goodsName);
        formdata.append('goodsIntro',goodsIntro);
        formdata.append('goodsCategoryId',"1");
        formdata.append('goodsCoverImg',goodsCoverImg);
        formdata.append('goodsCarousel',goodsCarousel);
        formdata.append('goodsDetailContent',goodsDetailContent);
        formdata.append('originalPrice',originalPrice);
        formdata.append('sellingPrice',sellingPrice);
        formdata.append('stockNum',stockNum);
        formdata.append('tag',tag);
        formdata.append("goodsSellStatus", "0");
        formdata.append("createUser", "0");

        axios.post("/goods/add.do", formdata).then (res=>{
            alert(res.data.msg);
            if (res.data.status == 0) {
                const action = changeAddStatue(false);
                dispatch(action);
            }
        })
        
    }
}