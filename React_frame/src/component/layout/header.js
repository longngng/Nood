import React from 'react'
import {Link} from 'react-router-dom'
function header() {
    return (
        <header style = {headerStyle}>
            <h1>TodoList</h1>
            <Link style = {linkStyle}to="/">Home</Link> |
             <Link style = {linkStyle} to = "/aboutus">About us</Link>
        </header>
    )
}
const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    background: '#000'
}

const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    
}
export default header;

