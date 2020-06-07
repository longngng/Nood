import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './component/Todos';
import Header from './component/layout/header';
import Addtodo from './component/addTodo';
import About from './component/pages/Aboutus'
import axios from 'axios';
// import {v4 as uuid} from "uuid";
import './App.css';

class App extends Component {
  state = {
    todos: [

    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}))
  }

  //Toggle complete element above
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }
  //Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}) );
  }

  //addTodo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10',
    {
      title,
      completed: false

    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
  }
  render() {
    return (
      <Router>
        <div className = "App">
          <div class="container">
            <Header />
            <Route exact path = "/" render = {props => (
              <React.Fragment>               
              <Addtodo addTodo ={this.addTodo}/>
              <Todos todos = {this.state.todos} markComplete = {this.markComplete}
              delTodo = {this.delTodo}/>
              </React.Fragment>
            )} />
            <Route exact path = "/aboutus" component = {About}/>
          </div>
        </div>  
      </Router>
    );
  }
}
export default App;
