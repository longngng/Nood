import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class campuses extends Component {
    render() {
        return (
            // <div>
            //     <Link style = {linkStyle} to = "/KentRidge"  className = "CPbtn">Kent Ridge</Link>          
            //     <Link style = {linkStyle} to = "/UTown" className="CPbtn">UTown</Link> 
            //     <Link style = {linkStyle} to = "/BukitTimah" className = "CPbtn">Bukit Timah</Link> 
            // </div>
            <section className = "UTown">
                <h6>𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚒𝚝𝚢 𝚃𝚘𝚠𝚗</h6>
                <Link style = {linkStyle} to = "/UTown"  className = "CPbtn">Find more</Link>
            </section>
            // <div className = "BukitTimah">
                
            // </div>
        )
    }
}
const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    float: 'center'   
}