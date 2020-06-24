import React, { Component } from 'react'
import Footer from '../layout/footer'
import {Link} from 'react-router-dom'
export default class KentRidge extends Component {
    array1 = [{iden: "res_1", name: "Arise and Shine"}, {iden: "res_3", name: "A Tempo"}, {iden: "res_5", name: "Central Square"}];
    render() {
        return (
            <div>
                <div className = "halfKR" id = "KR">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>𝙺𝚎𝚗𝚝 𝚁𝚒𝚍𝚐𝚎 𝙲𝚊𝚖𝚙𝚞𝚜</h3>
                </div>
                <div className = "banana_background">
                    {/* <h6>𝓒𝓱𝓸𝓸𝓼𝓮 𝓽𝓱𝓮 𝓸𝓷𝓮 𝓽𝓱𝓪𝓽 𝓲𝓷𝓽𝓮𝓻𝓮𝓼𝓽𝓼 𝔂𝓸𝓾</h6> */}
                    <br/>
                    <div className = "container">
                        <div id = {this.array1[0]['iden']}><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/Coffee_Roast" className = "_Linkbtn">
                        {this.array1[0]['name']}</Link></div>
                        <div id = {this.array1[1]['iden']}><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/Coffee_Roast" className = "_Linkbtn">
                        {this.array1[1]['name']}</Link></div>
                        <div id = {this.array1[2]['iden']}><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/Coffee_Roast" className = "_Linkbtn">
                        {this.array1[2]['name']}</Link></div>
                    
                        <div id = "res_1"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/A_and_S" className = "_Linkbtn">
                        Arise and Shine</Link></div>
                        <div id = "res_2"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/Coffee_Roast" className = "_Linkbtn">
                        Coffee Roast</Link></div>                        
                        <div id = "res_3"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        A Tempo</Link></div>
                        <div id = "res_4"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        Bar Bar Black Sheep</Link></div>
                        <div id = "res_5"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        Central Square</Link></div>
                        <div id = "res_6"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        Playtypus</Link></div>
                        <div id = "res_7"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        The Crave</Link></div>
                        <div id = "res_8"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        The Deck</Link></div>
                        <div id = "res_9"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        Cafe Delight</Link></div>
                        <div id = "res_10"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        Science's Frontier</Link></div>
                        <div id = "res_11"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        Halal canteen</Link></div>
                        <div id = "res_12"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        PGP canteen 1</Link></div>
                        <div id = "res_13"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        PGP canteen 2</Link></div>
                        <div id = "res_14"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        Subway</Link></div>
                        <div id = "res_15"><br/><br/><br/><br/><br/><br/><br/><br/><Link style = {linkStyle}to="/" className = "_Linkbtn">
                        PGP canteen 3</Link></div>
                    </div>
                    <br/>
                </div>
                <Footer/>
            </div>
        )
    }
}
const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    float: 'center, center'   
}