import React, { Component } from 'react'


const drawToggleButton = props => (
    <div onClick = {props.click} style = {{paddingBottom: '0', float: 'center', textAlign: 'center'}}>
        <h1>≡</h1>
    </div>
)

export default drawToggleButton