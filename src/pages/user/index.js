import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Redirect, Link} from 'react-router-dom';
import {
    Table,
    BottomContainer,
    PageButton,
    PButton,
} from '../goods/goodsList/style'
import {
    Circle,
    Container,
    TopContainer,
    ShowContainer
} from './style'
import { getList, deleteItem, lockedItem}from './store/actionCreators'

class User extends PureComponent {
    componentDidMount() {
        this.props.selectList(this.props.pageNum, this.props.pageSize);
    }
    render() {    
        const {total,login, isLastPage,pageSize, pageNum, handleLastPage, handleNextPage, handleDeleteClick, handleLockClick} = this.props;
        if (login) {
            return (
                <Container>

                <TopContainer>
                    <p>人员管理</p>
                </TopContainer>
                <ShowContainer>
                    <Table>
                        <tbody>
                            <tr className="table-head">
                                <td>编号</td>
                                <td>用户名</td>
                                <td>昵称</td>
                                <td>是否禁用</td>
                                <td>操作</td>
                            </tr>

                                {
                                    this.props.list.map((item)=>{
                                        return (
                                            <tr>
                                                <td>{item.adminUserId}</td>
                                                <td>{item.loginUserName}</td>
                                                <td>{item.nickName}</td>
                                                <td><Circle className={item.locked == 0? "red" : "green"}></Circle></td>
                                                <td><PButton onClick={()=>handleDeleteClick(item.adminUserId)}>删除</PButton><PButton  onClick={()=>handleLockClick(item.locked, item.adminUserId)}>{item.locked == 0? "启用" : "禁用"}</PButton></td>
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
    list: state.user.get("list"),
    pageNum: state.user.get("pageNum"),
    pageSize: state.user.get("pageSize"),
    total: state.user.get("total"),
    isLastPage: state.user.get("isLastPage")
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

        console.log(isLastPage);
       if (!isLastPage) {
        const action = getList(pageNum + 1, pageSize);
        dispatch(action);
       }
    },
    handleDeleteClick(userId) {
        const action = deleteItem(userId);
        dispatch(action);
    },
    handleLockClick(locked, userId) {
        const action = lockedItem(locked, userId);
        dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(User);