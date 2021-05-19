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
import { registerApp } from './store/actionCreators'

class Register extends PureComponent {
    render() { 
        if (!this.props.isRegister) {
            return(
                <Container>
                <BGImg/>
                <Top>乐猫后台管理系统</Top>
                <LoginBox>
                    <p className="title">
                        用户注册
                    </p>
                    <Input placeholder="用户名" ref={(input) => {this.account = input}}></Input>
                    <Input type="text" placeholder="昵称"  ref={(input) => {this.nickName = input}}/>
                    <Input type="password" placeholder="密码"  ref={(input) => {this.password = input}}/>
                    <Button onClick={()=>this.props.registerApp(this.account, this.password, this.nickName)}>注册</Button>
                </LoginBox>
            
                </Container>
            )
    } else {
        return(
            <Redirect to='/'></Redirect>
        )
    }
    }
}
const mapState = (state) => ({
    isRegister : state.register.get("isRegister")
});

const mapDispatch = (dispatch) => ({

    registerApp(accountElem, passwordElem, nickNameElem) {
        const action = registerApp(accountElem.value, passwordElem.value, nickNameElem.value);
        dispatch(action);
    }

})
export default connect(mapState, mapDispatch)(Register);