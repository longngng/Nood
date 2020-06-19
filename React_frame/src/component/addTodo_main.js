import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// axios.post('http://localhost/5000/canteens/add', canteen)
//     .then(res => console.log(res.data))


export class addTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    onSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:5000/canteens/')
        .then(response => {
            if (response.data.length > 0) {
                console.log(response.data);
            }
        })
        .catch(error => {
            console.log(error);
        })

        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    render() {
        return (
            <form onSubmit = {this.onSubmit} className = "submitForm"> 
                <input 
                    type = "text" 
                    name = "title" 
                    style ={{width: '40%', padding: '5px'}}
                    placeholder = "Search for your crave"
                    value = {this.state.title}
                    onChange = {this.onChange}
                />
                <input 
                type="submit" 
                value = "Submit" 
                className ="btn"
                style = {{width: '10%'}}
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
