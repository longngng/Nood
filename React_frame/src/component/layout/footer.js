import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className = "myfooter">
                
                <br></br>
                <br></br>
                A project under NUS Orbital 2020 
                <br></br>
                Last updated on June 15th 2020, 5:39 PM.
                

                <ul>
				    <li><a href = "https://www.facebook.com/">Facebook</a></li>
				    <li><a href = "https://https//www.instagram.com">Instagram</a></li>
				    <li><a href = "">Github</a></li>
				    <li><a href = "">About</a></li>
                    <li><Link to="../pages/Aboutus">About Us</Link></li>
                    <li><Link to = "/KentRidge">Find more</Link></li>
			    </ul>

            </div>
        )
    }
}

export default Footer