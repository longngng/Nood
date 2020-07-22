import React from 'react';
import {Link} from 'react-router-dom';
import '../../App'
import DrawToggleButton from './drawToggleButton'

const header_2 = props => 
     (
        <nav style = {headerStyle}>
            <div class = "res_button">
                <DrawToggleButton click = {props.drawerClickHandler}/>
            </div>
            <Link onClick = {scrollToTop} style = {linkStylehead} to = "/">𝓝𝓤𝓢 𝓕𝓸𝓸𝓭</Link>
            <div className = "nav-links">
            <Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}><h2>Home</h2></Link>
            <Link onClick = {scrollToTop} style = {linkStyle}to="/Aboutus" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>About</Link>
            <Link onClick = {scrollToTop} style = {linkStyle}to="/Register" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>Register</Link>
            <Link onClick = {scrollToTop} style = {linkStyle}to="/Login" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>Login</Link>
            </div>
        </nav>
    )
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
export default header_2;
