import React, { Component, Fragment, useEffect } from "react";
import "./Res.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Star from "../StarRating/StarRating";
import Dish_1 from "./List_of_dishes/Dishes";
import Info from "./Info/Info";
import Header from "../layout/header3_1";
import SideDrawer from "../layout/SideDrawer3_1";
import Backdrop from "../layout/Backdrop";
import Comment from "../Res_template/PostForm/PostForm";

export default class template_res extends Component {
  state = {
    todos: [],
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let sidedrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sidedrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        {sidedrawer}
        {backdrop}
        <div className="background">
          <br />
          <br />
          <div className="background_container">
            <div className="res_name">
              <h6>𝗔𝗿𝗶𝘀𝗲 𝗮𝗻𝗱 𝗦𝗵𝗶𝗻𝗲</h6>
            </div>
            <div className="top_favorit">
              <h6>𝗦𝗶𝗴𝗻𝗮𝘁𝘂𝗿𝗲 𝗱𝗶𝘀𝗵𝗲𝘀</h6>
            </div>
            <div className="res_image"></div>
            <div className="dish_image">
              <Dish_1 />
            </div>
            <div className="intro">
              <Info />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
