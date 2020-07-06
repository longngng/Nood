import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';
import './Info.css';
//import Map from '../Map/Map'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
function Map (){
    return (
    <GoogleMap 
        defaultZoom = {10} 
        defaultCenter = {{lat: 1.299180, lng: 103.771620}}
    />
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default class Info extends Component {

    render() {
        return (
            <div style = {{width: '100vh',height: '90vh'}}>
                <WrappedMap
                    googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,
                    drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    loadingElement = {<div style = {{height: "100%"}}/>}
                    containerElement = {<div style = {{height: "100%"}}/>}
                    mapElement = {<div style = {{height: "100%"}}/>}
                />
            </div>
        )
    }
}
