import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Link as Linkid } from 'react-scroll';

export default class campuses extends Component {
    render() {
        return (
            <div>
            <section className = "UTown">
                <div>
                <h6>𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚒𝚝𝚢 𝚃𝚘𝚠𝚗</h6>
                <Link onClick = {scrollToTop} style = {linkStyle} to = "/UTown"  className = "CPbtn">Find more</Link>
                </div>
                <div>
                    <Linkid
                    activeClass="active"
                    to="nus"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                    className = "roundbutton"
                    style = {{float: 'center'}}
                    >⌃</Linkid>
                </div>
            </section>
            </div>
        )
    }
}
const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    float: 'center'   
}
const scrollToTop = () => {
    window.scrollTo(0, 0)
}