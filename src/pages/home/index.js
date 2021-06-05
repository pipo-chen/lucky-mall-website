import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Redirect, Link, Route} from 'react-router-dom';
import {
    Container,
    LfetContainer,
    LeftNav,
    LeftItem,
    HeadLogo,
    HeadDiv,
    TopContainer,
    RightContainer,
    InfoUl
} from './style'
import {handleMouseEnter,handleMouseLeave, handleSelectNavItem} from './store/actionCreators'
import Goods from '../goods/index'
import User from '../user'
import Order from '../order'
import Carousel from '../carousel'
import Category from '../category/'

class Home extends PureComponent {
    
    selectNav(index) {
        if (index === '1') {
            return(<User/>)
        } else if (index === '2') {
            return(<Goods/>)
        } else if (index === '3') {
            return(<Order/>)
        } else if (index === '4'){
            return(<Carousel/>)
        } else {
            return(<Category/>)
        }
    }
    selectNavTitle(index) {
        if (index === '1') {
            return(<p>用户管理</p>)
        } else if (index === '2') {
            return(<p>商品管理</p>)
        } else if (index === '3') {
            return(<p>订单管理</p>)
        } else if (index === '4') {
            return(<p>轮播图配置</p>)
        } else {
            return(<p>分类管理</p>)
        }
        
    }
    render() {    
        const {login,index,handleNavClick} = this.props;
        if (login) {
            return (
                <Container>
                    <TopContainer>
                         {this.selectNavTitle(index)}
                    </TopContainer>
                    <LfetContainer>
                        <HeadDiv>
                            <HeadLogo/>
                            你好，mk
                            <InfoUl>
                                <li>修改密码</li>
                                <li>注销</li>
                            </InfoUl>
                        </HeadDiv>
                        <LeftNav>
                            <LeftItem className={index === '1' ? 'icon-user selected' : 'icon-user'}  onClick={()=>handleNavClick("1")} >用户管理</LeftItem>
                            <LeftItem className={index === '2' ? 'icon-goods selected' : 'icon-goods'} onClick={()=>handleNavClick("2")}>商品管理</LeftItem>
                            <LeftItem className={index === '3' ? 'icon-order selected' : 'icon-order'}  onClick={()=>handleNavClick("3")}>订单管理</LeftItem>
                            <LeftItem className='icon-statistic' onClick={()=>handleNavClick("4")}>轮播图配置</LeftItem>
                            <LeftItem className='icon-analyse' onClick={()=>handleNavClick("5")}>分类管理</LeftItem>
                        </LeftNav>
                    </LfetContainer>
                    <RightContainer>
                       {this.selectNav(this.props.index)}
                    </RightContainer>
                </Container>
            )
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    login : state.login.get("login"),
    mouse : state.home.get("mouse"),
    index : state.home.get("index")
});

const mapDispatch = (dispatch) => ({
    handleMouseEnter() {
        const action = handleMouseEnter();
        dispatch(action);
    },
    handleMouseLeave() {
        const action = handleMouseLeave();
        dispatch(action);
    },
    handleNavClick(index) {
        const action = handleSelectNavItem(index);
        dispatch(action);
    }

})
export default connect(mapState, mapDispatch)(Home);