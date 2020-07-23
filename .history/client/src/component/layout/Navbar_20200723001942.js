import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import DrawToggleButton from "./drawToggleButton";
import { Link as LinkComp} from "react-scroll";

const Navbar = ({ auth: { isAuthenticated, loading }, logout },props) => {
  const authLinks = (
    <ul>
      <li>
        <LinkComp
          activeClass="active"
          to="campuses"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="Linkbtn"
          style={linkStyle}
        >
         <h5>Explore</h5> 
        </LinkComp>
      </li>
      <li>
        <Link style={linkStyle} to="/Aboutus" className="Linkbtn">
          <h5>About</h5>
        </Link>
      </li>
      <li>
        <Link to="/dashboard" style = {linkStyle} className = "Linkbtn">
          <h5>Dashboard</h5>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!" style ={linkStyle} className = "Linkbtn">
          <h5>Logout</h5>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    // <ul>
    //   <li>
    //     <LinkComp
    //       activeClass="active"
    //       to="campuses"
    //       spy={true}
    //       smooth={true}
    //       offset={0}
    //       duration={1000}
    //       className="Linkbtn"
    //       style={linkStyle}
    //     >
    //      <h5>Explore</h5> 
    //     </LinkComp>
    //   </li>
    //   <li>
    //     <Link to="/register">Register</Link>
    //   </li>
    //   <li>
    //     <Link to="/login">Login</Link>
    //   </li>
    // </ul>
    <div class="nav-links">
        <LinkComp
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
        </LinkComp>
        <LinkComp
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
        </LinkComp>
        <Link style={linkStyle} to="/Aboutus" className="Linkbtn" onClick = {scrollToTop}>
          <h4>About</h4>
        </Link>
        <Link style={linkStyle} to="/Register" className="Linkbtn" onClick = {scrollToTop}>
          <h4>Register</h4>
        </Link>
        <Link style={linkStyle} to="/Login" className="Linkbtn" onClick = {scrollToTop}>
          <h4>Login</h4>
        </Link>
      </div>
  );

  return (
    <nav style = {headerStyle}>
      <div class="res_button">
        <DrawToggleButton click={props.drawerClickHandler} />
      </div>
      <Link
        activeClass="active"
        to="/"
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
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

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
export default connect(mapStateToProps, { logout })(Navbar);
