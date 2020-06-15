import React from 'react';
// import {Link} from 'react-router-dom';
import '../../App'
import {Link } from 'react-scroll';
function header() {
    return (
        <header style = {headerStyle}>
            {/* <Linkid style = {linkStylehead} to = "/:nus">𝓝𝓤𝓢 𝓕𝓸𝓸𝓭</Link>
            <Link style = {linkStyle} to = "/outlets" className = "Linkbtn"activeStyle = {{color: "rgb(221, 160, 95)"}} >Food Outlets |</Link>          
            <Link style = {linkStyle} to = "/:campuses" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>Explore |</Link> 
            <Link style = {linkStyle} to = "/aboutus" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>About us |</Link> 
            <Link style = {linkStyle}to="/" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>Home |</Link> */}
           <Link
                activeClass="active"
                to="nus"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                style = {linkStylehead}
            >𝓝𝓤𝓢 𝓕𝓸𝓸𝓭</Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration= {1000}
                className = "Linkbtn"
                style = {linkStyle}
            >Contact   |</Link>

            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration= {1000}
                className = "Linkbtn"
                style = {linkStyle}
            >About   |</Link>
            <Link
                activeClass="active"
                to="campuses"
                spy={true}
                smooth={true}
                offset={0}
                duration= {1000}
                className = "Linkbtn"
                style = {linkStyle}
            >Explore   |</Link>
            <Link
                activeClass="active"
                to="nus"
                spy={true}
                smooth={true}
                offset={0}
                duration= {1000}
                className = "Linkbtn"
                style = {linkStyle}
            >Home   |</Link>

        </header>
    )
}
const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    background: '#EF7C00',
}

const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    float: 'right'   
}
const linkStylehead = {
    color: '#fff',
    float: 'left',
    padding: '10px'
}
export default header;

