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
    Table,
    BottomContainer,
    PageButton
} from './style'

class Goods extends PureComponent {
    
    componentDidMount() {
        this.props.selectList(this.props.pageNum, this.props.pageSize);
    }

    totalShow(total) {
        return(
            <p className="total-show">合计：{total} 条</p>
        )
    }
    
    render() {
        const {pageNum, total,pageSize,handleLastPage,handleNextPage, isLastPage} = this.props;
       
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
                               this.props.list.map((item) => {
                                return (
                                    <tr key={item.goodsId}>
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
                    <BottomContainer>
                    {this.totalShow(total)}
                    <PageButton className="last-page" onClick={()=>{handleLastPage(pageNum)}}>⬅️</PageButton>
                    <p>第{pageNum}页</p>
                    <PageButton onClick = {()=>handleNextPage(pageNum, isLastPage, pageSize)}>➡️</PageButton>
                    </BottomContainer>
                </ShowContainer>
          
            </Container>  
        )
    }
}

const mapState = (state) => ({
    list : state.goods.get("list"),
    pageNum: state.goods.get("pageNum"),
    pageSize: state.goods.get("pageSize"),
    total: state.goods.get("total"),
    isLastPage:state.goods.get("isLastPage")
});
const mapDispatch = (dispatch) => ({
    handleLastPage(pageNum) {
        if (pageNum > 1) {
            const action = getList(pageNum-1, "5");
            dispatch(action);
        }
    },
    handleNextPage(pageNum, isLastPage, pageSize) {

       if (!isLastPage) {
        const action = getList(pageNum+1, pageSize);
        dispatch(action);
       }
    },
    selectList(pageNum, pageSize) {
        const action = getList(pageNum, pageSize);
        dispatch(action);
    }
})
export default connect(mapState, mapDispatch)(Goods);