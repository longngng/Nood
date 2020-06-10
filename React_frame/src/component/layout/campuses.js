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
            // <div>
            // <Link><section className = "KentRidge">
            //     <h6>Kent Ridge Campus</h6>
            //     <Link style = {linkStyle} to = "/KentRidge"  className = "CPbtn">Find more</Link>
            // </section></Link>
            <div className = "KentRidge" id = "campuses">
                <footer style = {footStyle}>
                    <h6>𝙺𝚎𝚗𝚝 𝚁𝚒𝚍𝚐𝚎 𝙲𝚊𝚖𝚙𝚞𝚜</h6>
                    <Link style = {linkStyle} to = "/KentRidge"  className = "CPbtn">Find more</Link>
                </footer> 
            </div>

            // {/* <Link><section className = "KentRidge">
            //     <h6>University Town</h6>
            //     <Link style = {linkStyle} to = "/KentRidge"  className = "CPbtn">Find more</Link>
            // </section></Link>
            // <Link>
            // <section className = "KentRidge">
            //     <h6>Bukit Timah Campus</h6>
            //     <Link style = {linkStyle} to = "/KentRidge"  className = "CPbtn">Find more</Link>
            // </section></Link> */}
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
const footStyle = {
    color: '#000000',
    textAlign: 'center',
    padding: '10px',
}