import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment'
import {
    ShowContainer,
    Table,
    BottomContainer,
    PageButton
} from './style'
import { getList } from './store/actionCreators'

class GoodsList extends PureComponent {
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
       
        return(
            <ShowContainer>
            <Table>
                <tbody>
                <tr className="table-head">
                <td>商品编号</td>
                <td>名称</td>
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
        ) 
    }
}


const mapState = (state) => ({
    list : state.goodsInfo.get("list"),
    pageNum: state.goodsInfo.get("pageNum"),
    pageSize: state.goodsInfo.get("pageSize"),
    total: state.goodsInfo.get("total"),
    isLastPage:state.goodsInfo.get("isLastPage")
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
export default connect(mapState, mapDispatch)(GoodsList);