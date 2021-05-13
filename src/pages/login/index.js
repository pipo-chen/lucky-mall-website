import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {
    LoginBox,
    Input,
    Button
} from './style'
class Login extends PureComponent {
    render() {
        return (
                <LoginBox>
                    <Input placeholder="用户名"></Input>
                    <Input placeholder="密码"></Input>
                    <Button>登录</Button>
                </LoginBox>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

})

export default Login;//connect(mapState, mapDispatch)(Login);