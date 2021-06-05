import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {     
    Container,
    TopContainer
 } from "../goods/style";

import {
    ShowContainer,
    LeftLevelDiv,
    RightLevelDiv,
    TopTitle,
    Detail,
    AddButton,
    BottomContainer
} from './style'
import { selectCategoryList, selectSecondCategoryList, addCategory} from './store/actionCreators'
import { Alert } from 'antd';

class Category extends PureComponent {
    componentDidMount() {
        this.props.selectCategoryList();
        this.props.selectSecondCategory(this.props.parentId);
        
    }
    render() {    
        if (this.props.login) {
            return (
                <Container>
                <TopContainer>
                    <p>类别配置</p>
                </TopContainer>
                <BottomContainer>
                <ShowContainer>
                    <LeftLevelDiv>
                        <TopTitle>一级类别</TopTitle>
                        <Detail>
                            {
                                this.props.list.map((item) => {
                                    return(
                                        <div key={item.categoryId}  onClick={()=>{this.props.selectSecondCategory(item.categoryId)}}>
                                            {item.categoryName}
                                            <span className="edit">编辑</span>
                                            <span className="delete">删除</span>
                                        </div>
                                    )
                                })
                            }
                        </Detail>
                        <AddButton onClick={()=>{this.props.addCategory()}}>
                            添加类别
                        </AddButton>
                    </LeftLevelDiv>
                    <RightLevelDiv>
                        <TopTitle>二级类别</TopTitle>
                        <Detail>
                        {
                            this.props.second.map((item) => {
                                return(
                                    <div key={item.categoryId}>
                                        {item.categoryName}
                                        <span className="edit">编辑</span>
                                        <span className="delete">删除</span>
                                    </div>
                                )
                            })
                        }
                        </Detail>
                        <AddButton onClick={()=>{this.props.addCategory(this.props.parentId)}}>
                            添加类别
                        </AddButton>
                    </RightLevelDiv>
                </ShowContainer>
                </BottomContainer>
                </Container>

            )
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    login : state.login.get("login"),
    list : state.category.get("list"),
    second : state.category.get("second"),
    parentId: state.category.get("parentId"),
});
const mapDispatch = (dispatch) => ({
    selectCategoryList() {
        const action = selectCategoryList();
        dispatch(action);
    },
    selectSecondCategory(categoryId) {
        const action = selectSecondCategoryList(categoryId);
        dispatch(action);
    },
    addCategory(parentId = 0) {
        // TODO 输入框 输入类名
        
    }
    
});

export default connect(mapState, mapDispatch)(Category);