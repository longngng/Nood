import React, {useState, Component} from "react";
import {FaStar} from "react-icons/fa";
import "./StarRating.css";
import axios from 'axios';

//rating: need to submit this rating to the database to calculate the overal rating
const StarRating = () => {
//export default class StarRating extends Component {
    const [rating, setRating] = useState (null);
    const [hover, setHover] = useState (null);
    // render () {
    //     const [rating, setRating] = useState (null);
    //     const [hover, setHover] = useState (null);
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input type = "radio" name = "rating" value = {ratingValue}
                        onClick = {() => setRating(ratingValue)}
                        />
                        <FaStar className = "star" color = {ratingValue <= (hover || rating) ? "yellow" : "grey"}size={50}
                        onMouseEnter = {() => setHover(ratingValue)}
                        onMouseLeave = {() => setHover(null)}
                        />                   
                    </label>
                );
            })}
            <p>Your rating is {rating < 1 ? "..." : rating}</p>
            <input 
                    type="submit" 
                    value = "Submit" 
                    className ="BTN"
                    style = {{width: '30%'}}
            />
        </div>
    );
    
};

export default StarRating;