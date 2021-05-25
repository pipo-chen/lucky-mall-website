import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {
    Table,
    ShowContainer,
    PButton,
    BottomContainer,
    PageButton
} from '../goods/goodsList/style'
import {     
    Container,
    OperateContainer,
    Button,
    TopContainer
 } from "../goods/style";
 import Dialog from './dialog'
 import moment from 'moment'
 import { getList, deleteItem, updateItem} from "./store/actionCreators";

class Carousel extends PureComponent {

    componentDidMount() {
        this.props.selectList(this.props.pageNum, this.props.pageSize);
    }
    updateView() {
        console.log(this.props.update)
        if (this.props.update) {
            return(<Dialog/>)
        }
    }
    render() {    
        const {update,login, list, pageNum, pageSize, isLastPage, total, handleLastPage, handleNextPage, handleDeleteItem, handleUpdeteItem} = this.props;
        if (login) {
            return (    
            <Container>
                <TopContainer>
                    <p>轮播图配置</p>
                </TopContainer>
                <OperateContainer>
                    <Button onClick={()=>{handleUpdeteItem(null)}} className="add-goods">创建轮播</Button>
                </OperateContainer>
                {this.updateView()}
                <ShowContainer>
                    <Table>
                        <tbody>
                            <tr className="table-head">
                                <td>编号</td>
                                <td>轮播图片</td>
                                <td>访问地址</td>
                                <td>等级</td>
                                <td>修改时间</td>
                                <td>操作</td>
                            </tr>
                            {
                                list.map((item) => {
                                    return(
                                        <tr key={item.carouselId}>
                                            <td>{item.carouselId}</td>
                                            <td><img src={item.carouselUrl}></img></td>
                                            <td>{item.redirectUrl}</td>
                                            <td>{item.carouselRank}</td>
                                            <td>{moment(item.updateTime).format('YYYY-MM-DD')}</td>
                                            <td><PButton onClick={()=>{handleUpdeteItem(item)}}>修改</PButton><PButton onClick={()=>{handleDeleteItem(item.carouselId)}}>删除</PButton></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <BottomContainer>
                    <p className="total-show">合计：{total} 条</p>
                    <PageButton className="last-page" onClick={()=>{handleLastPage(pageNum)}}></PageButton>
                    {
                        <p>第{pageNum}页</p>
                    }
                    <PageButton onClick = {()=>handleNextPage(pageNum, isLastPage, pageSize)}></PageButton>
                    </BottomContainer>
                </ShowContainer>
            </Container>  
            )
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    login : state.login.get("login"),
    list: state.carousel.get("list"),
    pageNum: state.carousel.get("pageNum"),
    pageSize: state.carousel.get("pageSize"),
    isLastPage: state.carousel.get("isLastPage"),
    total: state.carousel.get("total"),
    update: state.carousel.get("update")
});

const mapDispatch = (dispatch) => ({
    selectList(pageNum, pageSize) {
        const action = getList(pageNum, pageSize);
        dispatch(action);
    },
    handleLastPage(pageNum) {
        if (pageNum > 1) {
            const action = getList(pageNum - 1, "5");
            dispatch(action);
        }
    },
    handleNextPage(pageNum, isLastPage, pageSize) {

       if (!isLastPage) {
        const action = getList(pageNum + 1, pageSize);
        dispatch(action);
       }
    },
    handleDeleteItem(carouselId) {
        const action = deleteItem(carouselId);
        dispatch(action);
    },
    handleUpdeteItem(item) {
        const action = updateItem(item, true);
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(Carousel);