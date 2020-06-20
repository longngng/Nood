import React from 'react';
import {Link} from 'react-router-dom';
import '../../App'
function header_2() {
    return (
        <header style = {headerStyle}>
            <Link style = {linkStylehead} to = "/">𝓝𝓤𝓢 𝓕𝓸𝓸𝓭</Link>
            <Link style = {linkStyle}to="/" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>Home</Link>

        </header>
    )
}
const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    background: '#EF7C00',
    // display: 'flex'
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
export default header_2;