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
    RightContainer
} from './style'
import {handleMouseEnter,handleMouseLeave, handleSelectNavItem} from './store/actionCreators'
import Goods from '../goods/index'
import User from '../user'
import Order from '../order'

class Home extends PureComponent {
    
    selectNav(index) {
        if (index === '1') {
            return(<User/>)
        } else if (index === '2') {
            return(<Goods/>)
        } else {
            return(<Order/>)
        }
    }
    selectNavTitle(index) {
        if (index === '1') {
            return(<p>用户管理</p>)
        } else if (index === '2') {
            return(<p>商品管理</p>)
        } else {
            return(<p>订单管理</p>)
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
                        </HeadDiv>
                        <LeftNav>
                            <LeftItem className={index === '1' ? 'icon-user selected' : 'icon-user'}  onClick={()=>handleNavClick("1")} >用户管理</LeftItem>
                            <LeftItem className={index === '2' ? 'icon-goods selected' : 'icon-goods'} onClick={()=>handleNavClick("2")}>商品管理</LeftItem>
                            <LeftItem className={index === '3' ? 'icon-order selected' : 'icon-order'}  onClick={()=>handleNavClick("3")}>订单管理</LeftItem>
                            <LeftItem className='icon-statistic' onClick={()=>handleNavClick("4")}>数据统计</LeftItem>
                            <LeftItem className='icon-analyse' onClick={()=>handleNavClick("5")}>数据分析</LeftItem>
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