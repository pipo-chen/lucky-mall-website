import axios from 'axios'
import * as constants from './constants'

export const changeAddStatue = (res) => ({
    type: constants.ADD_GOODS,
    data: res
});

const changeOptionList = (options) => ({
    type: constants.CHANGE_OPTION,
    options: options
});

export const getCategoryList = () => {
    return(dispatch) => {

        axios.get('/category/get_basic_category.do').then((res)=>{
            if (res.data.status == 0) {
                console.log(res.data.msg);
                const action = changeOptionList(res.data.data);
                dispatch(action);
            } else {
                alert(res.data.msg)
            }
        });
    }
}

export const addGoodsInfo = (categoryId,goodsName, goodsIntro, goodsCoverImg,goodsCarousel, goodsDetailContent, originalPrice,sellingPrice,stockNum,tag) => {
    return(dispatch) => {
    
        const formdata = new FormData();
        formdata.append('goodsName',goodsName);
        formdata.append('goodsIntro',goodsIntro);
        formdata.append('goodsCategoryId',categoryId);
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