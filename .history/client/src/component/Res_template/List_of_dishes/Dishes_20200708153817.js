import React, { Component } from 'react'
import './Dishes.css'
export default class Dishes extends Component {
    render() {
        return (
        <div>
            <div className = "donut">             
            </div>
                <p>Donut<p>1$</p></p>
                <div className = "sponge">             
            </div>
                <p>Sponge cake<p>2$</p></p>
                {/* <p>2$</p> */}
                <div className = "egg_cake">             
            </div>
                <p>Egg cake<p>0.8$</p></p>
                <div className = "waffles">             
            </div>
                <p>Waffles<p>1.4$</p></p>
                <div className = "burger">             
            </div>
                <p>Burger<p>2$</p></p>
                <div className = "mung_bean">             
            </div>
                <p>Mung bean cake<p>1$</p></p>
                <div className = "carrot">             
            </div>
                <p>Carrot cake<p>1.2$</p></p>
                <div className = "red_bean">             
            </div>
                <p>Red bean cake<p>1.5$</p></p>
                <div className = "seasame">             
            </div>
                <p>Seasame cake<p>0.6$</p></p>
                <div className = "choco_cake">             
            </div>
                <p>Choco cake<p>1.1$</p></p>
        </div>
        )
    }
}
