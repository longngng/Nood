import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header_2 from '../layout/header2';
import Footer from '../layout/footer';
import Header_1 from '../layout/header';
import SideDrawer from '../layout/SideDrawer';
import Backdrop from '../layout/Backdrop';
import NUS_background from '../layout/nus_background';
import NUS_campuses from '../layout/campuses';
import NUS_campuses2 from '../layout/campuses2';
import NUS_campuses3 from '../layout/campuses3';

export default class Homepage extends Component {
    state = {
        todos: [
    
        ],
        sideDrawerOpen: false,
    
      }
    render() {
        let sidedrawer;
        let backdrop;
        if (this.state.sideDrawerOpen) {
          sidedrawer = <SideDrawer/>;
          backdrop = <Backdrop click = {this.backdropClickHandler}/>;
        }
        return (
        <div>
            <Header_1 drawerClickHandler= {this.drawerToggleClickHandler}/>
            {sidedrawer}
            {backdrop}
            <NUS_background/>
            <section>
                <NUS_campuses/> <NUS_campuses2/><NUS_campuses3/>
            </section>
            <Footer/>
        </div>
        )
    }
}
