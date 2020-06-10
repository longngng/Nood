import React, { Component } from 'react'
export default class nus_background extends Component {
    render() {
        return (
            <div className = "nus_background" id = "nus">
                <footer style = {footStyle}>
                    <h6>𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 ℕ𝕌𝕊</h6>
                    <h7>World class University and cuisine paradise!</h7>
                </footer> 
            </div>
        )
    }
}

const footStyle = {
    color: '#000000',
    textAlign: 'center',
    padding: '10px',
}