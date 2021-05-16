import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { getList } from '../goodsList/store/actionCreators'
import moment from 'moment'
import {
    Container,
    OperateContainer,
    Button,
    TopContainer,
    ShowContainer
} from './style'
import GoodsList from '../goodsList'
import GoodsAdd from '../goodsAdd'
import { changeAddStatue } from './store/actionCreators'

class Goods extends PureComponent {
   
    changShowContainer() {
        if (!this.props.isAdd) {
            return (
                <div>
                <OperateContainer>
                <Button onClick={()=>this.props.handleAddClick(this.props.isAdd)} className="add-goods">添加商品</Button>
                <Button className="change-goods">修改商品</Button>
                <Button className="arrive-goods">上架商品</Button>
                <Button className="sold-out-goods">下架商品</Button>
                </OperateContainer>
                <GoodsList/>
                </div>
            )
        } else {
            return(
            <GoodsAdd/>
            )
        }
    }
    render() {
       
        return (
            <Container>

                <TopContainer>
                    <p>商品管理</p>
                </TopContainer>
                
                {this.changShowContainer()}
            </Container>  
        )
    }
}
const mapState = (state) => ({
    isAdd : state.goods.get("isAdd")
});

const mapDispatch = (dispatch) => ({
    handleAddClick(isAdd) {

        const action = changeAddStatue(true);
        dispatch(action);
        
    }

});

export default connect(mapState, mapDispatch)(Goods);