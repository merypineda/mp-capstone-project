import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar';



export default class Home extends Component {
   

render() {
        return (
            <div className="home-wrapper">
              <NavBar />
              <h1>Get inspired with quotes</h1>
                <div className="home-wrapper-contents"> 
                    <Link className="homepage-quote" to="/create">Create Your Own</Link> 
                    <div className="homepage-quote-box">  
                        <div className="homepage-quote-text">
                            <p> “It always seems impossible until it's done.” Nelson Mandela</p>
                            </div>

                    </div>
                    </div>
                </div>
      
        )
    }
}