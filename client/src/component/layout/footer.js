import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className = "myfooter" id = "footer">
                
                A project under NUS Orbital 2020 
                <br></br>
                Last updated on June 27th 2020, 5:39 PM.
                
                <ul>
				    <li><a href = "https://www.facebook.com/">Facebook</a></li>
				    <li><a href = "https://www.instagram.com">Instagram</a></li>
				    <li><a href = "https://www.github.com">Github</a></li>
                    <li><Link to="/Aboutus">About Us</Link></li>
			    </ul>

            </div>
        )
    }
}

export default Footer