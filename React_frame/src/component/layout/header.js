import React from 'react'
import {Link} from 'react-router-dom'
function header() {
    return (
        <header style = {headerStyle}>
            <h1>𝓝𝓤𝓢 𝓕𝓸𝓸𝓭</h1>
            <Link style = {linkStyle}to="/" className = "Linkbtn">Home</Link>|
             <Link style = {linkStyle} to = "/aboutus" className = "Linkbtn">About us</Link>| 
             <Link style = {linkStyle} to = "/Explore" className = "Linkbtn">Explore</Link>| 
             <Link style = {linkStyle} to = "/outlets" className = "Linkbtn">Food Outlets</Link>
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
}
export default header;

