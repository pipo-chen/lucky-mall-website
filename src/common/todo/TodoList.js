import React, {Component} from 'react';
import{connect} from 'react-redux';
import * as constants from './store/constants'

class TodoList extends Component {
    render() {
        return(
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return <li onClick={()=>this.props.handleDelete(index)} key={index}>{item}</li>
                         })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.todo)
    return {
        inputValue: state.todo.inputValue,
        list: state.todo.list
    }
}

//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
          
            const action = {
                type: constants.CHANGE_INPUT_VALUE,
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: constants.ADD_ITEM
            }
            dispatch(action);
        },
        handleDelete(index) {
            console.log(index)
            const action = {
                type: constants.DELETE_ITEM,
                index: index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);