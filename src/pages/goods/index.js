import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { getList } from './store/actionCreators'
import moment from 'moment'
import {
    Container,
    OperateContainer,
    Button,
    TopContainer,
    ShowContainer,
    Table
} from './style'

class Goods extends PureComponent {
    componentWillMount() {
        this.props.selectList();
    }

    render() {
        
        return (
            <Container>
                <TopContainer>
                    <p>商品管理</p>
                </TopContainer>
                
                <OperateContainer>
                    <Button className="add-goods">添加商品</Button>
                    <Button className="change-goods">修改商品</Button>
                    <Button className="arrive-goods">上架商品</Button>
                    <Button className="sold-out-goods">下架商品</Button>
                </OperateContainer>
                <ShowContainer>
                    <Table>
                        <tbody>
                        <tr className="table-head">
                        <td>商品编号</td>
                        <td>商品名</td>
                        <td>商品简介</td>
                        <td>商品图片</td>
                        <td>商品库存</td>
                        <td>商品售价</td>
                        <td>上架状态</td>
                        <td>创建时间</td>
                        </tr>
                           {
                               this.props.list.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.goodsId}</td>
                                        <td>{item.goodsName}</td>
                                        <td>{item.goodsIntro}</td>
                                        <td>
                                            <img src={item.goodsCoverImg}/>
                                        </td>
                                        <td>{item.stockNum}</td>
                                        <td>{item.sellingPrice}</td>
                                        <td>{item.goodsSellStatus}</td>
                                        <td>{moment(item.createTime).format('YYYY-MM-DD')}</td>
                                    </tr>
                                )
                             })
                           }    
                        </tbody>
                    </Table>

                </ShowContainer>
            </Container>  
        )
    }
}

const mapState = (state) => ({
    list : state.goods.get("list")
});
const mapDispatch = (dispatch) => ({
    selectList() {
        const action = getList();
        dispatch(action);
    }
})
export default connect(mapState, mapDispatch)(Goods);