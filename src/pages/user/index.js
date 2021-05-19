import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Redirect, Link} from 'react-router-dom';
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
import Goods from '../goods/index'

class User extends PureComponent {
    render() {    
        if (this.props.login) {
            return (
                <Container>
                    <TopContainer>
                        <p>用户模块</p>
                    </TopContainer>
                    <LfetContainer>
                        <HeadDiv>
                            <HeadLogo/>
                            你好，mk
                        </HeadDiv>
                        <LeftNav>
                            <Link to='/user'><LeftItem className='icon-user'>用户管理</LeftItem></Link>
                            <Link to='/home'><LeftItem className='icon-goods'>商品管理</LeftItem></Link>
                            <Link to='/order'><LeftItem className='icon-order'>订单管理</LeftItem></Link>
                            <LeftItem className='icon-statistic'>数据统计</LeftItem>
                            <LeftItem className='icon-analyse'>数据分析</LeftItem>
                        </LeftNav>
                    </LfetContainer>
                    <RightContainer>
                        
                    </RightContainer>
                </Container>
            )
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    login : state.login.get("login")
});

export default connect(mapState, null)(User);