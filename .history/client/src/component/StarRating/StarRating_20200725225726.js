import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";
import axios from "axios";
//rating: need to submit this rating to the database to calculate the overal rating
const StarRating = (props) => {
  const [count, setCount] = useState(0);
  const [incr_rate, setRate] = useState(0);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [posts, setPosts] = useState([]);
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/canteens")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("http://localhost:5000/canteens")
      .then((res) => {
        console.log(res);
        //setRating(res.data);
        setCount(res.data);
        setRate(res.data);
        setUpdate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    // const Rate = {
    //     rating: updateRating,
    //     rating_num: updateRate_num
    // }

    const Rate = {
      rating: rating,
    };

    const id = "5ef0e33f12eb1a35884348ed"; //id of Arise and Shine

    axios
      .post("http://localhost:5000/canteens/update/" + id, Rate)
      .then((res) => {
        if (res.data.success) {
          setUpdate("");
          props.refreshFunction(res.data.result);
        } else {
        }
      });
    window.location.reload();
  };
  // render () {
  //     const [rating, setRating] = useState (null);
  //     const [hover, setHover] = useState (null);
  let updateRating;
  let updateRate_num;
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onChange={() => {
                setCount((count) => count + 1);
                setRate((incr_rate) => incr_rate + rating);
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "yellow" : "grey"}
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Your rating is {rating < 1 ? "..." : rating}</p>
      <input
        type="submit"
        value="Submit"
        className="BTN"
        style={{ width: "30%" }}
        onChange={() => {
          setCount((count) => count + 1);
          setRate((incr_rate) => incr_rate + rating);
        }}
        onClick={onSubmit}
        onClick ={scrollToTop}
      />
      <div>
        {posts.map((element) => {
          if (element.name === "Arise and Shine") {
            updateRating = element.rating + incr_rate;
            updateRate_num = element.rating_num + count;
          }
        })}
      </div>
    </div>
  );
};
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
export default StarRating;
