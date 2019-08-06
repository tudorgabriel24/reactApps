import React, { Component } from 'react';
import { directive } from '@babel/types';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handeChange = (e) => {
        this.setState({
            content: e.target.value
       })
    }
    handeSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
             content:''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handeSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handeChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo