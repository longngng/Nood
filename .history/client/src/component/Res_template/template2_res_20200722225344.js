import React, { Fragment, useEffect } from "react";
import "./Res.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Star from "../StarRating/StarRating";
import Dish_1 from "./List_of_dishes/Dishes";
import Info from "./Info/Info";
import Header from "../layout/header3_1";
import Navbar from "../layout/Navbar";
import SideDrawer from "../layout/SideDrawer3_1";
import Backdrop from "../layout/Backdrop";
import Comment from "../Res_template/PostForm/PostForm";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const Posts = ({ getPosts, post: { posts }, isAuthenticated }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  //   if (isAuthenticated) {
  //     return <Redirect to="/A_and_S_std" />;
  //   }
  if (isAuthenticated) {
    return (
      <Fragment>
        {/* <Navbar /> */}
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
            <div className="rating">
              <Star />
            </div>
          </div>
        </div>

        <PostForm />
        <div className="posts">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Navbar />
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
            <div className="rating">
              <Star />
            </div>
          </div>
        </div>

        <h2>Login to comment</h2>
      </Fragment>
    );
  }
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  post: state.post,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getPosts })(Posts);
