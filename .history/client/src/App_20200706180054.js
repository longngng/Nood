import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './component/Todos';
import Header_1 from './component/layout/header';
import Header_2 from './component/layout/header2';
import Header_3_1 from './component/layout/header3_1';
import SideDrawer from './component/layout/SideDrawer';
import Backdrop from './component/layout/Backdrop';
import Footer from './component/layout/footer';
import Addtodo from './component/addTodo';
import TestInfo from './component/Res_template/Info/Info'
//import About from './component/layout/about';
import AboutUs from './component/pages/Aboutus';
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
import Homepage from './component/pages/Homepage';
import KentRidge from './component/pages/KentRidge';
import KentRidge2 from './component/pages/KentRidge2';
import BukitTimah from './component/pages/BukitTimah';
import UTown from './component/pages/UTown';
// import { ReactComponent } from '*.svg';
import Search from './component/pages/search';
import A_and_S from './component/Res_template/template_res';
class App extends Component {
  
  render() {
    
    return (
      <Router>
        <div className = "App" style = {{height: '100%'}}>

              <Route path="/" exact component={Homepage} />
              <Route path="/KentRidge2" component={KentRidge2} />
              <Route path="/Info" component={TestInfo} />
              
              <Route exact path = "/BukitTimah" render = { props => (
                <React.Fragment>
                  <Header_2/>
                  <Addtodo/>
                  <BukitTimah/>
                </React.Fragment>
              )} />
              <Route exact path = "/UTown" render = { props => (
                <React.Fragment>
                  <Header_2/>
                  <Addtodo/>
                  <UTown/>
                </React.Fragment>
              )} />
              <Route exact path = "/Aboutus" render = { props => (
                <React.Fragment>
                  <Header_2/>
                  <AboutUs/>
                </React.Fragment>
              )} />
              <Route exact path = "/Search_result" render = { props => (
                <React.Fragment>
                  <Search/>
                </React.Fragment>
              )} />
              <Route exact path = "/A_and_S" render = { props => (
                <React.Fragment>
                  <Header_3_1/>
                  {/* <Addtodo/> */}
                  <A_and_S/>
                  <Footer/>
                </React.Fragment>
              )} />
        </div>  
        <script src = "./component/layout/control_nav"></script>
      </Router>
    );
  }
}
export default App;
  //state = {
  //   todos: [

  //   ],
  //   sideDrawerOpen: false,

  // }

  // drawerToggleClickHandler = () => {
  //   this.setState ((prevState) => {
  //     return {sideDrawerOpen: !prevState.sideDrawerOpen};
  //   });
  // }
  // backdropClickHandler = () => {
  //   this.setState({sideDrawerOpen: false});
  // }
  
  // let sidedrawer;
  // let backdrop;
  // if (this.state.sideDrawerOpen) {
  //   sidedrawer = <SideDrawer/>;
  //   backdrop = <Backdrop click = {this.backdropClickHandler}/>;
  // }
{/* <Route
                exact
                path="/Homepage2"
                render={props => (
                  <React.Fragment>
                    <Header_1 drawerClickHandler= {this.drawerToggleClickHandler}/>
                    {sidedrawer}
                    {backdrop}
                    <NUS_background/>
                    <section>
                      <NUS_campuses/> <NUS_campuses2/><NUS_campuses3/>
                    </section>
                    <Footer/>
                  </React.Fragment>
                )}
              />
              <Route exact path = "/KentRidge" render = { props => (
                <React.Fragment>
                  <Header_2/>
                  <Addtodo/>
                  <KentRidge/>
                </React.Fragment>
              )} /> */}
