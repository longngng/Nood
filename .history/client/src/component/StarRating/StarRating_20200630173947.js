import React, {useState, useEffect} from "react";
import {FaStar} from "react-icons/fa";
import "./StarRating.css";
import axios from 'axios';

//rating: need to submit this rating to the database to calculate the overal rating
const StarRating = (props) => {
//export default class StarRating extends Component {
    // constructor = (props) => {
    //     super(props);
    // }
    // onSubmit = () => {

    // }
    const [count,setCount] = useState(0);
    const [incr_rate,setRate] = useState(0);
    const [rating, setRating] = useState ([]);
    const [hover, setHover] = useState (null);
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/canteens')
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        axios.post('http://localhost:5000/canteens')
        .then(res => {
            console.log(res);
            //setRating(res.data);
            setCount(res.data);
            setRate(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },null)
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
                    onClick = {() => {
                        setCount(count => count+1);
                        setRate(incr_rate => incr_rate+rating)}}
            />
            {/* {
                posts.map(post => 
                    if(post.name === "Arise and Shine")
                <li key={post.id}>{post.rating}</li>
                
            )} */}
            {/* <div>{
                rating.map((element) => {
                    if (element.name === "Arise and Shine") {
                        element.rating += rating;
                        element.rating_num += 1; 
                    }
                })
                }
            </div> */}
            <div>{
                posts.map((element) => {
                    if (element.name === "Arise and Shine"){
                        element.rating += incr_rate;
                        element.rating_num += count;
                        return(
                        <p>The current rating for this restaurant is {element.rating === 0 ? element.rating : Math.round((element.rating/element.rating_num) * 100) / 100}
                        </p>

                    )
                    }
                })
                }
            </div>
            
        </div>
    );
};

export default StarRating;