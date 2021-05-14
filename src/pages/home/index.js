import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import {
    Container,
    LfetContainer,
    LeftNav,
    LeftItem,
    HeadLogo,
    HeadDiv
} from './style'

class Home extends PureComponent {
    render() {    
        if (this.props.login) {
            return (
                <Container>
                    <LfetContainer>
                        <HeadDiv>
                            <HeadLogo/>
                            你好，mk
                        </HeadDiv>
                        <LeftNav>
                            <LeftItem>功能一</LeftItem>
                            <LeftItem>功能二</LeftItem>
                            <LeftItem>功能三</LeftItem>
                            <LeftItem>功能四</LeftItem>
                            <LeftItem>功能五</LeftItem>
                        </LeftNav>
                    </LfetContainer>
                </Container>
            )
        } else {
            return <Redirect to='/login'/>
        }
    }
}

const mapState = (state) => ({
    login : state.login.get("login")
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Home);