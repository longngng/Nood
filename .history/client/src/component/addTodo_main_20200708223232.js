import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// axios.post('http://localhost/5000/canteens/add', canteen)
//     .then(res => console.log(res.data))


export class addTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeSearchKey = this.onChangeSearchKey.bind(this);

        this.state = {
            searchkey : ''
        }
    }

    onChangeSearchKey(e) {
        this.setState({
            searchkey : e.target.value
        })
    }

    //onChange = (e) => this.setState({[e.target.name]: e.target.value})
    onSubmit = (e) => {
        e.preventDefault();
        
        const sendData = {
            searchkey: this.state.searchkey
        }
        console.log(sendData);
        axios.post('http://localhost:5000/canteens/search', sendData)
        .then(response => {
            if (response.data.length > 0) {
                console.log(response.data);
            }
        })
        .catch(error => {
            console.log(error);
        })

        // this.props.addTodo(this.state.title);
        // this.setState({title: ''});
    }
    render() {
        return (
            <form onSubmit = {this.onSubmit} className = "submitForm"> 
                <input 
                    type = "text" 
                    name = "title" 
                    style ={{width: '40%', padding: '5px'}}
                    placeholder = "Search for your crave"
                    value = {this.state.searchkey}
                    onChange = {this.onChangeSearchKey}
                />
                <input 
                type="submit" 
                value = "Submit" 
                className ="btN"
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
