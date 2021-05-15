import React, {Component} from 'react';
import{connect} from 'react-redux';
import {InputButton} from './style'
import {getList, getHandleClickAction,getHandleDeleteAction, getBlurAction,getFocusAction,getInputAction} from './store/actionCreators'

class TodoList extends Component {
    loginOrnot = (login) => {
        if (login) {
            return(
            <p>wahahahahha</p>
            )
        } else {
            return(
            <p>nooooooooo</p>
            )
        }
    }
    render() {
        return(
            <div>
                <div>
                    <InputButton value={this.props.inputValue} onChange={this.props.changeInputValue} className={this.props.focused? 'focused' : ''} onBlur={this.props.blurHandle} onFocus = {this.props.focusHandle}></InputButton>
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return <li onClick={()=>this.props.handleDelete(index)} key={index}>{item}</li>
                      })
                    }
                </ul>
                <div>
                {this.loginOrnot(this.props.login)}
                </div>
            </div>
                            

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.todo)
    return {
        inputValue: state.todo.get("inputValue"),
        list: state.todo.get("list"),
        focused: state.todo.get("focused"),
        login: state.login.get("login")
    }
}

//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getInputAction(e.target.value)
            dispatch(action);
        },
        handleClick() {
            // const action1 = getHandleClickAction();
            const action = getList();
            dispatch(action);
        },
        handleDelete(index) {
            const action = getHandleDeleteAction(index);
            dispatch(action)
        },
        blurHandle() {
            const action = getBlurAction();
            dispatch(action)
        },
        focusHandle() {
            const action = getFocusAction();
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);