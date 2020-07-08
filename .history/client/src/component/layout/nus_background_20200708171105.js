import React, { Component } from 'react'
import Addtodo_main from '../addTodo_main';
import {Link } from 'react-scroll';
import 'semantic-ui-css/semantic.min.css'

export default class nus_background extends Component {
    render() {
        return (
            <div className = "nus_background" id = "nus">
                <footer style = {footStyle}>
                    <h6>𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 ℕ𝕌𝕊</h6>
                    <h7>World class University and cuisine paradise!</h7>
                </footer> 
                <Addtodo_main/>
                <div>
                    <Link
                    activeClass="active"
                    to="campuses"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                    className = "roundbutton"
                    style = {{float: 'center'}}
                    >⌄</Link>
                </div>
            </div>
        )
    }
}

const footStyle = {
    color: '#000000',
    textAlign: 'center',
    padding: '10px',
}