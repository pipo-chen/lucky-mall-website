import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
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
import {handleMouseEnter,handleMouseLeave} from './store/actionCreators'
import Goods from '../goods/index'

class Home extends PureComponent {
    render() {    
        if (this.props.login) {
            return (
                <Container>
                    <TopContainer>
                        <p>群组管理</p>
                    </TopContainer>
                    <LfetContainer>
                        <HeadDiv>
                            <HeadLogo/>
                            你好，mk
                        </HeadDiv>
                        <LeftNav>
                            <LeftItem className='icon-home' >首页</LeftItem>
                            <LeftItem className='icon-user'>用户管理</LeftItem>
                            <LeftItem className='icon-goods'>商品管理</LeftItem>
                            <LeftItem className='icon-order'>订单管理</LeftItem>
                            <LeftItem className='icon-statistic'>数据统计</LeftItem>
                            <LeftItem className='icon-analyse'>数据分析</LeftItem>
                        </LeftNav>
                    </LfetContainer>
                    <RightContainer>
                        <Goods/>
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
    mouse : state.home.get("mouse")
});

const mapDispatch = (dispatch) => ({
    handleMouseEnter() {
        const action = handleMouseEnter();
        dispatch(action);
    },
    handleMouseLeave() {
        const action = handleMouseLeave();
        dispatch(action);
    }

})
export default connect(mapState, mapDispatch)(Home);