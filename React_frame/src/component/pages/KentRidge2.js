import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header_2 from '../layout/header2';
export default class KentRidge2 extends Component {
    constructor(props) {
        super(props);
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeDuration = this.onChangeDuration.bind(this);
        // this.onChangeDate = this.onChangeDate.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.onChangeSearchKey = this.onChangeSearchKey.bind(this);

        this.state = {
            searchkey: '',
            canteenDisplay: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/canteens')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                canteenDisplay: response.data.map(canteen => canteen.name),
              })
            }
        })
          .catch((error) => {
            console.log(error);
        })
    
    }

    onChangeSearchKey(e) {
        this.setState({
            searchkey : e.target.value
        })
    }

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
                this.setState({
                    canteenDisplay : response.data.map(canteen => canteen.rating)
                })
            }
        })
        .catch(error => {
            console.log(error);
        })

        // this.props.addTodo(this.state.title);
        // this.setState({title: ''});
    }

    render() {
        return(
            <div>
                <Header_2/>
                <br></br>
                <br></br>
                <br></br>
                <h2>Kent Ridge 2</h2>
                {this.state.canteenDisplay}
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
                    className ="btn"
                    style = {{width: '10%'}}
                    />
                </form>
            </div>
        )
    }
}