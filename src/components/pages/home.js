import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar';



export default class Home extends Component {
   

render() {
        return (
            <div className="home-wrapper-container">
              <NavBar />
                <h1>Get inspired with quotes</h1>
                    <div className="home-wrapper-contents">
                        <div className="home-wrapper-body">
                        <Link className="home-wrapper-quote" to="/create">Create Your Own</Link> 
                        <div className="home-wrapper-quote-box">  
                            <div className="home-wrapper-quote-text">
                                <p> “It always seems impossible until it's done.” Nelson Mandela</p>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
      
        )
    }
}