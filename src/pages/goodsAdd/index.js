import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {
    ShowContainer,
    TopContainer,
    Table,
    SelectButton
} from './style'
import {addGoodsInfo, getCategoryList, updateGoodsInfo, changeAllState} from '../goods/store/actionCreators'

class GoodsAdd extends PureComponent {

    componentDidMount() {
        this.props.getCategoryList();
    }
    
    render() {
        
        const {isModify,data,handleBackClick} = this.props;
        return (
            <ShowContainer>
                <TopContainer>
                    <button onClick={()=>handleBackClick()} >返回</button>
                    <p>添加内容</p>
                </TopContainer>
                <Table>
                    <tbody>
                    <tr>
                        <td className="title">商品名称</td>
                        <td>
                            <input type="text" ref={(input) => {this.goodsName = input}} defaultValue={isModify ? data.goodsName : ""}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td className="title">商品标签</td>
                        <td><input type="text" ref={(input) => {this.tag = input}} defaultValue={isModify ? data.tag : ""}></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品分类</td>
                        <td>
                            <select  ref={(select) => {this.categoryId = select}}>
                            {this.props.options.map((item) => {
                                return (
                                    <option key={item.categoryId} value={item.categoryId}>{item.categoryName}</option>
                                )}
                                )
                            }
                        
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="title">商品简介</td>
                        <td><input type="text" ref={(input) => {this.goodsIntro = input}} defaultValue={isModify ? data.goodsIntro : ""}></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品状态</td>

                        <td>
                            <select ref={(select) => {this.goodsSellStatus = select}}>
                                <option value="0">上架</option>
                                <option value="1">下架</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="title">商品详情</td>
                        <td><textarea ref={(textarea) => {this.goodsDetailContent = textarea}} defaultValue={isModify ? data.goodsDetailContent : ""}></textarea></td>
                    </tr>
                    <tr>
                        <td className="title">商品图片</td>
                        <td><input type="file"></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品链接</td>
                        <td><input type="text"  ref={(input) => {this.goodsCoverImg = input}} defaultValue={isModify ? data.goodsCoverImg : ""}></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品轮播图</td>
                        <td><input type="text"  ref={(input) => {this.goodsCarousel = input}} defaultValue={isModify ? data.goodsCarousel : ""}></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品进货价</td>
                        <td><input type="text"  ref={(input) => {this.originalPrice = input}} defaultValue={isModify ? data.originalPrice : ""}></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品售价</td>
                        <td><input type="text"  ref={(input) => {this.sellingPrice = input}} defaultValue={isModify ? data.sellingPrice : ""}></input></td>
                    </tr>
                    <tr>
                        <td className="title">库存量</td>
                        <td><input type="text"  ref={(input) => {this.stockNum = input}} defaultValue={isModify ? data.stockNum : ""}></input></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <SelectButton onClick={()=>handleBackClick()} >取消</SelectButton>
                        <SelectButton className="save" onClick={()=>this.props.addGoods(this.props.data.goodsId,this.props.isModify,this.goodsSellStatus, this.categoryId, this.goodsName, this.goodsIntro, this.goodsCoverImg, this.goodsCarousel, this.goodsDetailContent, this.originalPrice, this.sellingPrice, this.stockNum, this.tag)}>确定</SelectButton>
                        </td>
                    </tr>
                    </tbody>
                </Table>
               
            </ShowContainer>
        )
    }
}

const mapState = (state) => ({
    options : state.goods.get("options"),
    isModify: state.goods.get("isModify"),
    data: state.goods.get("data")

});

const mapDispatch = (dispatch) => ({
    handleBackClick() {
        const action = changeAllState(false);
        dispatch(action);
    },
    addGoods(goodsId,isModify,goodsSellStatusElem, categoryIdElem,goodsNameElem, goodsIntroElem, goodsCoverImgElem,goodsCarouselElem, goodsDetailContentElem, originalPriceElem, sellingPriceElem, stockNumElem, tagElem) {
        if (!isModify) {
            const action = addGoodsInfo(goodsSellStatusElem.value, categoryIdElem.value, goodsNameElem.value, goodsIntroElem.value,goodsCoverImgElem.value,goodsCarouselElem.value,goodsDetailContentElem.value,originalPriceElem.value,sellingPriceElem.value,stockNumElem.value,tagElem.value);
            dispatch(action);
        } else {
            const action = updateGoodsInfo(goodsId,goodsSellStatusElem.value, categoryIdElem.value, goodsNameElem.value, goodsIntroElem.value,goodsCoverImgElem.value,goodsCarouselElem.value,goodsDetailContentElem.value,originalPriceElem.value,sellingPriceElem.value,stockNumElem.value,tagElem.value);
            dispatch(action);
        }
    },
    getCategoryList() {
        const action = getCategoryList();
        dispatch(action)
    }

});

export default connect(mapState, mapDispatch)(GoodsAdd);