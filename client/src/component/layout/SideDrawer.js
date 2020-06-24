import React, { Component } from 'react'
import {Link as Linkroute} from 'react-router-dom';
import {Link } from 'react-scroll';

export default class SideDrawer extends Component {
    render() {
        return (
            <div className = "side-drawer">
                <ul>
                <li><Link
                    activeClass="active"
                    to="nus"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                    className = "Linkbtn"
                    style = {linkStyle}
                >Home</Link></li>
                <li><Link
                    activeClass="active"
                    to="campuses"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                    className = "Linkbtn"
                    style = {linkStyle}
                >Explore</Link></li>
                <li><Linkroute style = {linkStyle} to = "/Aboutus" className = "Linkbtn" >About</Linkroute></li>
                </ul>
            </div>
        )
    }
}
const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    position: 'fixed',
    // background: '#EF7C00',
}

const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    // float: 'right',
}
const linkStylehead = {
    color: '#fff',
    position: 'absolute',
    top: '7px',
    left: '100px',
    display: 'flex'
}