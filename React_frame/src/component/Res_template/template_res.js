import React, { Component } from 'react'
import './Res.css'
import Star from '../StarRating/StarRating'
export default class template_res extends Component {
    render() {
        return (
            <div className = "background">
                <br/>
                <br/>
                <br/>
                <div className = "background_container">
                    <div className = "res_name"> 
                        <h6>𝗔𝗿𝗶𝘀𝗲 𝗮𝗻𝗱 𝗦𝗵𝗶𝗻𝗲</h6>                  
                    </div>
                    <div className = "top_favorit">
                        <h6>𝗦𝗶𝗴𝗻𝗮𝘁𝘂𝗿𝗲 𝗱𝗶𝘀𝗵𝗲𝘀</h6>
                    </div>
                    <div className = "res_image">
                    </div>
                    <div className = "dish_image">
                    </div>
                    <div className = "intro">
                    </div>
                    <div className = "rating">
                        <Star/>
                    </div>
                    <div className = "comment">
                    </div>
                </div>
            </div>
        )
    }
}
