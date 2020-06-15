import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './component/Todos';
import Header_1 from './component/layout/header';
import Header_2 from './component/layout/header2';
import Addtodo from './component/addTodo';
import About from './component/layout/about';
import NUS_background from './component/layout/nus_background';
import NUS_campuses from './component/layout/campuses';
import NUS_campuses2 from './component/layout/campuses2';
import NUS_campuses3 from './component/layout/campuses3';
// import {Container, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import {v4 as uuid} from "uuid";
import './App.css';
// import { ReactComponent } from '*.svg';
import KentRidge from './component/pages/KentRidge';
import BukitTimah from './component/pages/BukitTimah';
import UTown from './component/pages/UTown';
// import { ReactComponent } from '*.svg';
import UTown_res from './component/layout/utown_res'
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
              {/* <Addtodo addTodo={this.addTodo} /> */}
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <Header_1 />
                    <NUS_background/>
                    <section>
                      <NUS_campuses/> <NUS_campuses3/><NUS_campuses2/>
                    </section>
                    <About/>
                  </React.Fragment>
                )}
              />
              <Route path = "/KentRidge" render = { props => (
                <React.Fragment>
                  <Header_2/>
                  <Addtodo/>
                  <KentRidge/>
                </React.Fragment>
              )} />
              <Route path = "/BukitTimah" render = { props => (
                <React.Fragment>
                  <Header_2/>
                  <Addtodo/>
                  <BukitTimah/>
                </React.Fragment>
              )} />
              <Route path = "/UTown" render = { props => (
                <React.Fragment>
                  <Header_2/>
                  <Addtodo/>
                  <UTown/>
                  <UTown_res/>
                </React.Fragment>
              )} />
            </div>
        </div>  
      </Router>
    );
  }
}
export default App;
