import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

class Order extends PureComponent {
    render() {    
        if (this.props.login) {
            return (
                <p>订单模块</p>
            )
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    login : state.login.get("login"),
});

export default connect(mapState, null)(Order);