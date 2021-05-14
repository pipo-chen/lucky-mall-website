import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import {
    LoginBox,
    BGImg,
    Input,
    Button,
    Top,
    Container
} from './style'
import {loginApp} from './store/actionCreators'

class Login extends PureComponent {
    render() {  
        if (!this.props.login) {
            return (
                <Container>
                    <BGImg/>
                    <Top>乐猫后台管理系统</Top>
                    <LoginBox>
                        <p className="title">
                            密码登录
                        </p>
                        <Input placeholder="用户名" ref={(input) => {this.account = input}}></Input>
                        <Input type="password" placeholder="密码"  ref={(input) => {this.password = input}}/>
                        <Button onClick={()=>this.props.loginApp(this.account, this.password)}>登录</Button>
                        <p  className="link"><Link to='/register'>前往注册</Link></p>
                    </LoginBox>
                
                </Container>
            )
        } else {
            return(
                <Redirect to='/home'></Redirect>
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