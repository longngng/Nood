import React, { Fragment, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./component/Todos";
import Header_1 from "./component/layout/header";
import Header_2 from "./component/layout/header2";
import SideDrawer from "./component/layout/SideDrawer";
import Backdrop from "./component/layout/Backdrop";
import Footer from "./component/layout/footer";
import Addtodo from "./component/addTodo";
import TestInfo from "./component/Res_template/Info/Info";
//import About from './component/layout/about';
import AboutUs from "./component/pages/Aboutus";
import Navbar from "./component/layout/Navbar";
import NUS_background from "./component/layout/nus_background";
import NUS_campuses from "./component/layout/campuses";
import NUS_campuses2 from "./component/layout/campuses2";
import NUS_campuses3 from "./component/layout/campuses3";
// import {Container, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import {v4 as uuid} from "uuid";
import "./App.css";
// import { ReactComponent } from '*.svg';
import Homepage from "./component/pages/Homepage";
import KentRidge from "./component/pages/KentRidge";
import KentRidge2 from "./component/pages/KentRidge2";
import BukitTimah from "./component/pages/BukitTimah";
import UTown from "./component/pages/UTown";
// import { ReactComponent } from '*.svg';
import Search from "./component/pages/search";
import A_and_S from "./component/Res_template/template2_res";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";

import Dashboard from "./component/dashboard/Dashboard";
import ProfileForm from "./component/profile-forms/ProfileForm";
import PrivateRoute from "./component/routing/PrivateRoute";
import AddExperience from "./component/profile-forms/AddExperience";
import AddEducation from "./component/profile-forms/AddEducation";
import Posts from "./component/posts/Posts";
import Post from "./component/post/Post";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import Alert from "./component/layout/Alert";

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <div className="App" style={{ height: "100%" }}>
          <Route path="/" exact component={Homepage} />
          <Route path="/KentRidge2" component={KentRidge2} />
          <Route path="/Info" component={TestInfo} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/create-profile" component={ProfileForm} />
          <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
          <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
          />
          <PrivateRoute exact path="/add-education" component={AddEducation} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/A_and_S" component={A_and_S} />
          <PrivateRoute exact path="/posts/:id" component={Post} />

          <Route
            exact
            path="/BukitTimah"
            render={(props) => (
              <React.Fragment>
                <Header_2 />
                <Addtodo />
                <BukitTimah />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/UTown"
            render={(props) => (
              <React.Fragment>
                <Header_2 />
                <Addtodo />
                <UTown />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/Aboutus"
            render={(props) => (
              <React.Fragment>
                <Header_2 />
                <AboutUs />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/Search_result"
            render={(props) => (
              <React.Fragment>
                <Search />
              </React.Fragment>
            )}
          />
        </div>
        <script src="./component/layout/control_nav"></script>
      </Router>
    </Provider>
  );
};

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
{
  /* <Route
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
              )} /> */
}
