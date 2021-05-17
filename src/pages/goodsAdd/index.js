import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {
    ShowContainer,
    TopContainer,
    Table,
    SelectButton
} from './style'
import {changeAddStatue, addGoodsInfo, getCategoryList} from '../goods/store/actionCreators'

class GoodsAdd extends PureComponent {

    componentDidMount() {
        this.props.getCategoryList();
    }
    
    render() {
        
        return (
            <ShowContainer>
                <TopContainer>
                    <button onClick={()=>this.props.handleBackClick()} >返回</button>
                    <p>添加内容</p>
                </TopContainer>
                <Table>
                    <tbody>
                    <tr>
                        <td className="title">商品名称</td>
                        <td><input type="text" ref={(input) => {this.goodsName = input}}></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品标签</td>
                        <td><input type="text" ref={(input) => {this.tag = input}}></input></td>
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
                        <td><input type="text" ref={(input) => {this.goodsIntro = input}}></input></td>
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
                        <td><textarea ref={(textarea) => {this.goodsDetailContent = textarea}}></textarea></td>
                    </tr>
                    <tr>
                        <td className="title">商品图片</td>
                        <td><input type="file"></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品链接</td>
                        <td><input type="text"  ref={(input) => {this.goodsCoverImg = input}}></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品轮播图</td>
                        <td><input type="text"  ref={(input) => {this.goodsCarousel = input}}></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品进货价</td>
                        <td><input type="text"  ref={(input) => {this.originalPrice = input}}></input></td>
                    </tr>
                    <tr>
                        <td className="title">商品售价</td>
                        <td><input type="text"  ref={(input) => {this.sellingPrice = input}}></input></td>
                    </tr>
                    <tr>
                        <td className="title">库存量</td>
                        <td><input type="text"  ref={(input) => {this.stockNum = input}}></input></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <SelectButton>取消</SelectButton>
                        <SelectButton className="save" onClick={()=>this.props.addGoods(this.goodsSellStatus, this.categoryId, this.goodsName, this.goodsIntro, this.goodsCoverImg, this.goodsCarousel, this.goodsDetailContent, this.originalPrice, this.sellingPrice, this.stockNum, this.tag)}>确定</SelectButton>
                        </td>
                    </tr>
                    </tbody>
                </Table>
               
            </ShowContainer>
        )
    }
}

const mapState = (state) => ({
    options : state.goods.get("options")
});

const mapDispatch = (dispatch) => ({
    handleBackClick() {
        const action = changeAddStatue(false);
        dispatch(action);
    },
    addGoods(goodsSellStatusElem, categoryIdElem,goodsNameElem, goodsIntroElem, goodsCoverImgElem,goodsCarouselElem, goodsDetailContentElem, originalPriceElem, sellingPriceElem, stockNumElem, tagElem) {
        const action = addGoodsInfo(goodsSellStatusElem.value, categoryIdElem.value, goodsNameElem.value, goodsIntroElem.value,goodsCoverImgElem.value,goodsCarouselElem.value,goodsDetailContentElem.value,originalPriceElem.value,sellingPriceElem.value,stockNumElem.value,tagElem.value);
        dispatch(action);
    },
    getCategoryList() {
        const action = getCategoryList();
        dispatch(action)
    }

});

export default connect(mapState, mapDispatch)(GoodsAdd);