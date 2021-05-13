import React, {PureComponent} from 'react';
import {connect} from 'react-redux'

class Register extends PureComponent {
    render() {
        return (
            <p>这是一个注册页</p>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Register);