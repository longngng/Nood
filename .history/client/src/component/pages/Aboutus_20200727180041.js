import React, { Component } from "react";
import Footer from "../layout/footer";
import { Link } from "react-router-dom";

export default class about extends Component {
  render() {
    return (
      <div>
        <div className="about_background" id="about">
        <div className = "about_countainer"> 
          <h9> About the project</h9>
          <p>
          <pre>
          A project under NUS's CP2106 program.</pre>
          <pre>
          This website is dedicated to all the food lovers here at NUS
          </pre>
          </p>
          <h9> About the team</h9>

          <div className="container2">
            <p>
              <pre>Long NGUYEN</pre>

              <a href="mailto:longnguyen@u.nus.edu">
                {" "}
                <pre>Email: longnguyen@u.nus.edu{" "}</pre>
              </a>
              <a
                href="https://www.linkedin.com/in/long-nguyen-2004441a2/ "
                target="_blank"
              >
                <pre>Linkedin</pre>
              </a>
              <a href="https://github.com/longngng" target="_blank">
                <pre>Github</pre>
              </a>
            </p>

            <p>
            <pre>Tra Quang Minh Thong</pre>
              <a href="mailto:tqmthong@u.nus.edu"> <pre>tqmthong@u.nus.edu</pre></a>
              <a href="https://www.linkedin.com/ " target="_blank">
                <pre>Linkedin</pre>
              </a>
              <a href="https://github.com/" target="_blank">
                <pre>Github</pre>
              </a>
            </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
