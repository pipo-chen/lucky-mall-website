import React, { Component } from 'react'
import {
    HeaderWrapper,
    Logo
} from './style'

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <Logo/>
                </HeaderWrapper>
                用户名：<input type="text"></input>
                密码：<input type="password"></input>
                <input type="button" value="登录" onClick={this.handleLoginBtnClick}></input>
            </div>
            
        )
    }

    handleLoginBtnClick() {
        alert("123");
    }
}

export default Header;