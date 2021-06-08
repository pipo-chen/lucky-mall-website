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
    BottomContainer,
    Input
} from './style'
import { selectCategoryList, selectSecondCategoryList, addCategory, changeAddParent, changeAddChild, deleteCategory} from './store/actionCreators'

class Category extends PureComponent {
    componentDidMount() {
        this.props.selectCategoryList();
        this.props.selectSecondCategory(this.props.parentId);
        
    }
    
    render() {   
        const {login, list, addParent, addChild, parentId, selectSecondCategory, handleInputCategory, addCategory, handleDelete} = this.props;

        if (login) {
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
                                list.map((item) => {
                                    return(
                                        <div key={item.categoryId}  onClick={()=>{selectSecondCategory(item.categoryId)}}>
                                            {item.categoryName}
                                            <span className="edit">编辑</span>
                                            <span className="delete" onClick={()=>{handleDelete(item.categoryId)}}>删除</span>
                                        </div>
                                    )
                                })
                            }
                        </Detail>
                        <Input className={addParent ? "show" : ""} ref={(input) => {this.parentName = input}} onBlur={()=>{handleInputCategory("0",this.parentName)}}/>
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
                                        <Input></Input>{item.categoryName}
                                        <span className="edit" >编辑</span>
                                        <span className="delete" onClick={()=>{handleDelete(parentId,item.categoryId)}}>删除</span>
                                    </div>
                                )
                            })
                        }
                        </Detail>
                        <Input className={addChild ? "show" : ""} ref={(input) => {this.childName = input}} onBlur={()=>{handleInputCategory(parentId,this.childName)}}/>
                        <AddButton onClick={()=>{addCategory(parentId)}}>
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
    addParent: state.category.get("addParent"),
    addChild : state.category.get("addChild")
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
        if (parentId == 0) {
            const action = changeAddParent(true);
            dispatch(action);
        } else {
            const action = changeAddChild(true);
            dispatch(action);
        }
        
    },
    handleInputCategory(parentId, itemName) {
        const action = addCategory(parentId, itemName.value);
        dispatch(action);
    },
    handleDelete(parentId, categoryId) {
        const action = deleteCategory(parentId, categoryId);
        dispatch(action);
    }
    
});

export default connect(mapState, mapDispatch)(Category);