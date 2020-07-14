import React, { Component } from 'react'


const drawToggleButton = props => (
    <div onClick = {props.click} style = {{paddingBottom: '10px'}}>
        <h1>≡</h1>
    </div>
)

export default drawToggleButton