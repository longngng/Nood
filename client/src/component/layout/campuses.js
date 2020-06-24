import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class campuses extends Component {
    render() {
        return (
            <div className = "KentRidge" id = "campuses">
                <footer style = {footStyle}>
                    <h6>𝙺𝚎𝚗𝚝 𝚁𝚒𝚍𝚐𝚎 𝙲𝚊𝚖𝚙𝚞𝚜</h6>
                    <Link onClick = {scrollToTop} style = {linkStyle} to = "/KentRidge"  className = "CPbtn">Find more</Link>
                    
                </footer> 
            </div>
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
const scrollToTop = () => {
    window.scrollTo(0, 0)
}