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
            <div className = "KentRidge">
                <h6>abc</h6>
            </div>
            // <div className = "UTown">
                
            // </div>
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