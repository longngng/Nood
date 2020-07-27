import React, { Component } from "react";
import Footer from "../layout/footer";
import { Link } from "react-router-dom";

export default class about extends Component {
  render() {
    return (
      <div>
        <div className="about_background" id="about">
          <h6> About the project</h6>
          <p>The website is dedicated to all the food lovers here at NUS</p>
          <h9> About the team</h9>

          <div className="container2">
            <p>
              <h1>Long NGUYEN</h1>

              <a href="mailto:longnguyen@u.nus.edu">
                {" "}
                <h8>Email: longnguyen@u.nus.edu{" "}</h8>
              </a>
              <br></br>
              <a
                href="https://www.linkedin.com/in/long-nguyen-2004441a2/ "
                target="_blank"
              >
                Linkedin
              </a>
              <br></br>
              <a href="https://github.com/longngng" target="_blank">
                Github
              </a>
            </p>

            <p>
              <a href="mailto:tqmthong@u.nus.edu"> <h8>tqmthong@u.nus.edu</h8></a>
              <br></br>
              <a href="https://www.linkedin.com/ " target="_blank">
                <h8>Linkedin</h8>
              </a>
              <br></br>
              <a href="https://github.com/" target="_blank">
                <h8>Github</h8>
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
