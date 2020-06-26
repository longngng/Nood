import React, { Component } from 'react'
import Footer from '../layout/footer'
import {Link} from 'react-router-dom'
export default class KentRidge extends Component {

    render() {
        return (
            <div>
                <div className = "halfKR" id = "KR">
                    <h3>𝙺𝚎𝚗𝚝 𝚁𝚒𝚍𝚐𝚎 𝙲𝚊𝚖𝚙𝚞𝚜</h3>
                </div>
                <div className = "banana_background">
                    <br/>
                    <div className = "container">                   
                        <div id = "res_1"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/A_and_S" className = "_Linkbtn">
                        Arise and Shine</Link></div>
                        <div id = "res_2"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/Coffee_Roast" className = "_Linkbtn">
                        Coffee Roast</Link></div>                        
                        <div id = "res_3"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        A Tempo</Link></div>
                        <div id = "res_4"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        Bar Bar Black Sheep</Link></div>
                        <div id = "res_5"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        Central Square</Link></div>
                        <div id = "res_6"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        Playtypus</Link></div>
                        <div id = "res_7"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        The Crave</Link></div>
                        <div id = "res_8"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        The Deck</Link></div>
                        <div id = "res_9"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        Cafe Delight</Link></div>
                        <div id = "res_10"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        Science's Frontier</Link></div>
                        <div id = "res_11"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        Halal canteen</Link></div>
                        <div id = "res_12"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        PGP canteen 1</Link></div>
                        <div id = "res_13"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        PGP canteen 2</Link></div>
                        <div id = "res_14"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
                        Subway</Link></div>
                        <div id = "res_15"><br/><br/><br/><br/><br/><br/><br/><br/><Link onClick = {scrollToTop} style = {linkStyle}to="/" className = "_Linkbtn">
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
const scrollToTop = () => {
    window.scrollTo(0, 0)
}