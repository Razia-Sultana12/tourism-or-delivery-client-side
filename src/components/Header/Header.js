import React from 'react';
import {  Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import tour from '../flaticons/tour.png';
import './Header.css';

const Header = () => {
  const {user , logOut}= useAuth();
    return (
        <div className="header">
          <nav className="navbar sticky-top navbar-expand-lg  bg-light">
         <div className="container-fluid fs-5">
         <a className="navbar-brand text-dark fs-4 fw-bold" href="#">
         <img src={tour} width="75" height="75" className="rounded-circle"/>TourHour</a>
      
                <NavLink className="navHover" to="/home">Home</NavLink>
                <NavLink className="navHover" to="/aboutUs">About Us</NavLink>
                <NavLink className="navHover" to="/addDestination">Add Destination</NavLink>
                
          
                {user?.email?
                <button onClick={logOut} type="button" className="btn btn-secondary btn-lg fs-5">Logout</button>:
                <NavLink className="navHover" to="/login">Login</NavLink>}
                <small className="fs-5 signin">Sign in As:<a href="#login">{user?.displayName}</a></small>
                
                </div>
                </nav>
        </div>
    );
};

export default Header;