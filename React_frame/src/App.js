import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './component/Todos';
import Header from './component/layout/header';
import Addtodo from './component/addTodo';
import About from './component/pages/Aboutus';
import {Link} from 'react-router-dom';
import NUS_background from './component/layout/nus_background';
import NUS_campuses from './component/layout/campuses';
import NUS_campuses2 from './component/layout/campuses2';
import NUS_campuses3 from './component/layout/campuses3';
import {Container, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import {v4 as uuid} from "uuid";
import './App.css';
// import { ReactComponent } from '*.svg';

class App extends Component {
  state = {
    todos: [

    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=0')
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

  addTodo = (title) => {
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
          <div className="container">
              <Header />
              <Addtodo addTodo={this.addTodo} />
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    {/* <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    /> */}
                    <NUS_background/>
                    <Container>
                    <Col>
                      <Row>123</Row>
                      <Row>456</Row>
                      <Row>789</Row>
                    </Col>
                    </Container>
                  </React.Fragment>
                )}
              />
              <Route path="/about" component={About} />
            </div>
        </div>  
      </Router>
    );
  }
}
export default App;
