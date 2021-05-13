import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';

class Home extends PureComponent {
    render() {    
        if (this.props.login) {
            return (
                <div>
                    Home
                </div>
            )
        } else {
            return <Redirect to='/login'/>
        }
    }
}

const mapState = (state) => ({
    login : state.login.get("login")
});


export default connect(mapState, null)(Home);