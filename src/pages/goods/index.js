import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { getList } from '../goods/goodsList/store/actionCreators'
import {
    Container,
    OperateContainer,
    Button,
    TopContainer,
    ShowContainer
} from './style'
import GoodsList from '../goods/goodsList'
import GoodsAdd from '../goods/goodsAdd'
import { changeAddState} from './store/actionCreators'
import { changeSoldState } from '../goods/goodsList/store/actionCreators'

class Goods extends PureComponent {
  
    showEdit() {
        return(
            <GoodsAdd/>
            )
    }
    showList() {
        return (

            <div>
            <OperateContainer>
            <Button onClick={()=>this.props.handleAddClick(this.props.isAdd)} className="add-goods">添加商品</Button>
            <Button onClick={()=>this.props.handleSoldStateClick("arrive", this.props.select)} className="arrive-goods">上架商品</Button>
            <Button onClick={()=>this.props.handleSoldStateClick("soldout", this.props.select)} className="sold-out-goods">下架商品</Button>
            </OperateContainer>
            <GoodsList/>
            </div>
        )
    }

    render() {
       
        return (
            <Container>

                <TopContainer>
                    <p>商品管理</p>
                </TopContainer>
                {!(this.props.isModify || this.props.isAdd)?this.showList():this.showEdit()}
            </Container>  
        )
    }
}
const mapState = (state) => ({
    isAdd : state.goods.get("isAdd"),
    select: state.goodsInfo.get("select"),
    isModify: state.goods.get("isModify")
});

const mapDispatch = (dispatch) => ({
    handleAddClick(isAdd) {
        const action = changeAddState(true);
        dispatch(action);
    },
    handleSoldStateClick(state, list) {
        if (list != null) {
            for (const item of list) {
                if (item["isSelect"]) {
                    const action = changeSoldState(state, item);
                    dispatch(action);
                }
            }
        }
    }

});

export default connect(mapState, mapDispatch)(Goods);