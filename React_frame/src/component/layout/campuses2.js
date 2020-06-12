import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Link as Linkid } from 'react-scroll';

export default class campuses extends Component {
    render() {
        return (
            // <div>
            //     <Link style = {linkStyle} to = "/KentRidge"  className = "CPbtn">Kent Ridge</Link>          
            //     <Link style = {linkStyle} to = "/UTown" className="CPbtn">UTown</Link> 
            //     <Link style = {linkStyle} to = "/BukitTimah" className = "CPbtn">Bukit Timah</Link> 
            // </div>
            <div>
            <section className = "UTown">
                <h6>𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚒𝚝𝚢 𝚃𝚘𝚠𝚗</h6>
                <Link style = {linkStyle} to = "/UTown"  className = "CPbtn">Find more</Link>
                <br></br>
                <div>
                    <Linkid
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                    className = "roundbutton"
                    style = {{float: 'center'}}
                    >⌄</Linkid>
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