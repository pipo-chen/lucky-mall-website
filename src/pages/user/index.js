import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Redirect, Link} from 'react-router-dom';
import {
    ShowContainer,
    Table,
    BottomContainer,
    PageButton,
    CheckButton,
    PButton,
} from '../goods/goodsList/style'
import { getList }from './store/actionCreators'

class User extends PureComponent {
    componentDidMount() {
        this.props.selectList(this.props.pageNum, this.props.pageSize);
    }
    render() {    
        const {total,login, isLastPage,pageSize, pageNum, handleLastPage, handleNextPage} = this.props;
        if (login) {
            return (
                <ShowContainer>
                    <Table>
                        <tbody>
                            <tr className="table-head">
                                <td>编号</td>
                                <td>用户名</td>
                                <td>昵称</td>
                                <td>是否激活</td>
                            </tr>

                                {
                                    this.props.list.map((item)=>{
                                        return (
                                            <tr>
                                                <td>{item.adminUserId}</td>
                                                <td>{item.loginUserName}</td>
                                                <td>{item.nickName}</td>
                                                <td>{item.locked}</td>
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
                </ShowContainer>)
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
    total: state.user.get("total")
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
});

export default connect(mapState, mapDispatch)(User);