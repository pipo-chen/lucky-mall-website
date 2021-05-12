import React, {Component} from 'react';
import{connect} from 'react-redux';
import * as constants from './store/constants'
import {InputButton} from './style'
import {getInputAction, getHandleClickAction,getHandleDeleteAction, getBlurAction,getFocusAction} from '../todo/store/actionCreators'

class TodoList extends Component {
    getInputItem = (show) => {
        if (show) {
            return(
                <ul>
                {
                    this.props.list.map((item,index)=>{
                        return <li onClick={()=>this.props.handleDelete(index)} key={index}>{item}</li>
                     })
                }
                </ul>
            )
        } else {
            return null;
        }
    }
    render() {
        return(
            <div>
                <div>
                    <InputButton value={this.props.inputValue} onChange={this.props.changeInputValue} className={this.props.focused? 'focused' : ''} onBlur={this.props.blurHandle} onFocus = {this.props.focusHandle}></InputButton>
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                {this.getInputItem(this.props.focused)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.todo)
    return {
        inputValue: state.todo.inputValue,
        list: state.todo.list,
        focused: state.todo.focused
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
            const action = getHandleClickAction();
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