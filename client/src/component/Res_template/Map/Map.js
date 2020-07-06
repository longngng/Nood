import React, { Component } from 'react';
import './Map.css';
import {GoogleMap} from 'react-google-maps';
const Map = (props) => {
        return (
            <div>
                <GoogleMap defaultZoom={10}/>
            </div>
        )
}
export default Map;
