import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class campuses extends Component {
    render() {
        return (
            <section className = "BukitTimah">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h6>𝙱𝚞𝚔𝚒𝚝 𝚃𝚒𝚖𝚊𝚑 𝙲𝚊𝚖𝚙𝚞𝚜</h6>
                <Link style = {linkStyle} to = "/BukitTimah"  className = "CPbtn">Find more</Link>
            </section>
        )
    }
}
const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    float: 'center',
    
}