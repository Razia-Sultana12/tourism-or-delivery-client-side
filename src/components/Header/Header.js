import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle ,faPowerOff} from '@fortawesome/free-solid-svg-icons'
import {  Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import tour from '../flaticons/tour.png';
import profile from '../flaticons/user.png'

import './Header.css';

const Header = () => {
  //const profile = <FontAwesomeIcon icon={faUserCircle} />
  const logout = <FontAwesomeIcon icon={faPowerOff} />
  const {user , logOut}= useAuth();
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand fs-2 fw-bold" href="#"><img src={tour} width="75" height="75" className="rounded-circle"/>TourHour</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="/home" className="navHover nav-link">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/aboutUs" className="navHover nav-link" >About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/faq" className="navHover nav-link" >FAQ</NavLink>
        </li>
        {user.email && (
        <li class="nav-item">
        <NavLink className="navHover nav-link" to="/addDestination"> Add Destination</NavLink>
        </li>)}
      </ul>
      <span class="navbar-text">
      {user.email ? (
                 <div className="d-flex align-items-center mx-auto">
                  <img className="m-2" width='42' height='42' src={profile} alt="" srcset="" />
                     {user?.displayName}
                   <button
                     onClick={logOut}
                     className="btn-secondary rounded me-2 mx-3 py-1"
                   >
                       {logout} Logout
                     </button>
                   </div>
                 ) : (
                   <NavLink to="/login" className="navHover nav-link">
                     Login
                   </NavLink>)}
      </span>
    </div>
  </div>
</nav>
        
    );
};

export default Header;