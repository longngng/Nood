import React from "react";
import { Link as Linkroute } from "react-router-dom";
import "../../App";
import { Link } from "react-scroll";
import DrawToggleButton from "./drawToggleButton";
// function header() {
//     return (
const header = (props) => (
  <div>
    {/* <nav style={headerStyle}> */}
      <div class="res_button">
        <DrawToggleButton click={props.drawerClickHandler} />
      </div>
      {/* <Link
        activeClass="active"
        to="nus"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="link"
        style={linkStylehead}
        onClick = {scrollToTop}
      > 
        𝓝𝓤𝓢 𝓕𝓸𝓸𝓭
      </Link>
      <div class="nav-links">
        <Link
          activeClass="active"
          to="nus"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="Linkbtn"
          style={linkStyle}
          onClick = {scrollToTop}
        >
          <h4>Home</h4>
        </Link>
        <Link
          activeClass="active"
          to="campuses"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="Linkbtn"
          style={linkStyle}
        >
          <h4>Explore</h4>
        </Link>
        <Linkroute style={linkStyle} to="/Aboutus" className="Linkbtn" onClick = {scrollToTop}>
          <h4>About</h4>
        </Linkroute>
        <Linkroute style={linkStyle} to="/Register" className="Linkbtn" onClick = {scrollToTop}>
          <h4>Register</h4>
        </Linkroute>
        <Linkroute style={linkStyle} to="/Login" className="Linkbtn" onClick = {scrollToTop}>
          <h4>Login</h4>
        </Linkroute>
      </div>
    </nav> */}
  </div>
);
const headerStyle = {
  color: "#fff",
  textAlign: "center",
  position: "fixed",
  background: "#EF7C00",
};

const linkStyle = {
  color: "#fff",
  textAlign: "center",
  display: "flex",
  float: "right",
};
const linkStylehead = {
  color: "#fff",
  position: "absolute",
  top: "7px",
  left: "100px",
  display: "flex",
};
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
export default header;
