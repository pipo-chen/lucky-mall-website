import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
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
                    <Link to='/register'>注册</Link>

                </LoginBox>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Login);