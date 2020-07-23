import React from "react";
import { Link as Linkroute } from "react-router-dom";
import "../../App";
import { Link } from "react-scroll";
import DrawToggleButton from "./drawToggleButton";
// function header() {
//     return (
const header = (props) => (
  <div>
      <div class="res_button">
        <DrawToggleButton click={props.drawerClickHandler} />
      </div>
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
