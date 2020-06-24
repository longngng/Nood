import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class addTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display: 'flex', position: 'fixed'}}> 
                <input 
                    type = "text" 
                    name = "title" 
                    style ={{width: '80%', padding: '5px'}}
                    placeholder = "Search for your crave"
                    value = {this.state.title}
                    onChange = {this.onChange}
                />
                <input 
                type="submit" 
                value = "Submit" 
                className ="btn"
                style = {{width: '20%'}}
                />
            </form>
        )
    }
}
//Proptypes
addTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}
export default addTodo

