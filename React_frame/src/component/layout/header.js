import React from 'react';
import {Link} from 'react-router-dom';
import '../../App'
function header() {
    return (
        <header style = {headerStyle}>
            <Link style = {linkStylehead} to = "/">𝓝𝓤𝓢 𝓕𝓸𝓸𝓭</Link>
            <Link style = {linkStyle} to = "/outlets" className = "Linkbtn">Food Outlets |</Link>          
            <Link style = {linkStyle} to = "campuses" className = "Linkbtn">Explore |</Link> 
            <Link style = {linkStyle} to = "/aboutus" className = "Linkbtn">About us |</Link> 
            <Link style = {linkStyle}to="/" className = "Linkbtn">Home |</Link>
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

