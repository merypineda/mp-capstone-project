import React, { Component } from 'react';
import { NavLink }  from 'react-router-dom';

export default class NavBar extends Component {

    render() {
    
        return (

            <div className="navlinks-wrapper">
                 <div className="navbar-links">
                 <NavLink exact to="/">Home</NavLink>
                 
                 <NavLink to="/quotes">Quotes</NavLink>
    
                   <NavLink to="/create">Create Quotes</NavLink>    
                 </div>
                
            </div>
        );
    }
}