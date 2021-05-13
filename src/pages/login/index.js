import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import {
    LoginBox,
    Input,
    Button
} from './style'
import {loginApp} from './store/actionCreators'

class Login extends PureComponent {
    render() {
            
        if (this.props.login) {
            return (
                    <LoginBox>
                        <Input placeholder="用户名" ref={(input) => {this.account = input}}></Input>
                        <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}></Input>
                        <Button onClick={()=>this.props.loginApp(this.account, this.password)}>登录</Button>
                        <Link to='/register'>注册</Link>
                        <Link to='/home'>进入</Link>
                    </LoginBox>
            )
        } else {
            return(
                <LoginBox>
                        <Input placeholder="用户名" ref={(input) => {this.account = input}}></Input>
                        <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}></Input>
                        <Button onClick={()=>this.props.loginApp(this.account, this.password)}>登录</Button>
                        <Link to='/register'>注册</Link>
                        <Link to='/home'>进入</Link>
                        <p>登录失败</p>
                    </LoginBox>
             
            )
        }
    }
}

const mapState = (state) => ({
    login : state.login.get("login")
});

const mapDispatch = (dispatch) => ({
    loginApp(accountElem, passwordElem) {
        const action = loginApp(accountElem.value, passwordElem.value);
        dispatch(action);
    }

})

export default connect(mapState, mapDispatch)(Login);