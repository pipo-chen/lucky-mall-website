import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import moment from 'moment'
import {
    ShowContainer,
    Table,
    BottomContainer,
    PageButton,
    CheckButton,
    PButton
} from './style'
import { getList, selectAllOrNot, selectGoodsId, deleteItem} from './store/actionCreators'
import * as constants from './store/constants'
import {modifyInfo} from '../../goods/store/actionCreators'

const changeData = (data) => ({
    type: constants.CHANGE_DATA,
    data: data
})

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
        const {isSelectAll, pageNum, total,pageSize,handleLastPage,handleNextPage, isLastPage,changeSelect,handleModifyInfoClick,handleDeleteClick} = this.props;
       
        return(
            <ShowContainer>
            <Table>
                <tbody>
                <tr className="table-head">
                <td><CheckButton className={isSelectAll ? "selected" :""} value={isSelectAll ? "1" : "0"}  onClick={(e)=>changeSelect(e)} ></CheckButton></td>
                <td>商品编号</td>
                <td>名称</td>
                <td>商品简介</td>
                <td>商品图片</td>
                <td>商品库存</td>
                <td>商品售价</td>
                <td>上架状态</td>
                <td>创建时间</td>
                <td>操作</td>
                
                </tr>
                   {
                       this.props.select.map((item) => {
                        return (
                            <tr key={item.goodsId}>
                                <td>
                                    <CheckButton 
                                    value={item.goodsId} 
                                    onClick={(e) => {changeSelect(e)}}
                                    className= {item.isSelect ? "selected" :''}
                                    />
                                </td>
                                <td>{item.goodsId}</td>
                                <td>{item.goodsName}</td>
                                <td>{item.goodsIntro}</td>
                                <td>
                                    <img src={item.goodsCoverImg}/>
                                </td>
                                <td>{item.stockNum}</td>
                                <td>{item.sellingPrice}</td>
                                <td>{item.goodsSellStatus == 0? "上架":"下架"}</td>
                                <td>{moment(item.createTime).format('YYYY-MM-DD')}</td>
                                <td><PButton onClick={()=>handleModifyInfoClick(item)}>修改</PButton><PButton onClick={()=>handleDeleteClick(item)}>删除</PButton></td>
                            </tr>
                        )
                     })
                   }    
                </tbody>
            </Table>
            <BottomContainer>
            {this.totalShow(total)}
            <PageButton className="last-page" onClick={()=>{handleLastPage(pageNum)}}></PageButton>
            <p>第{pageNum}页</p>
            <PageButton onClick = {()=>handleNextPage(pageNum, isLastPage, pageSize)}></PageButton>
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
    isLastPage:state.goodsInfo.get("isLastPage"),
    isSelectAll: state.goodsInfo.get("isSelectAll"),
    select:state.goodsInfo.get("select")
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
    },
    changeSelect(e) {
       
        if (e.target.value === '1') {
            const action = selectAllOrNot(false);
            dispatch(action);
        }
        else if (e.target.value === '0') {
            const action = selectAllOrNot(true);
            dispatch(action);
        } else {
            const action = selectGoodsId(e.target.value);
            dispatch(action);
        }
    },
    handleModifyInfoClick(item) {
        //传递进入添加商品页 并带值
        const action = modifyInfo(item);
        dispatch(action);

    },
    handleDeleteClick(item) {
        const action = deleteItem(item);
        dispatch(action);
    }
})
export default connect(mapState, mapDispatch)(GoodsList);