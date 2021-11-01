import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import './Banner.css'

const Banner = () => {
  const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
  const calender = <FontAwesomeIcon icon={faCalendarAlt} />
  const adventure = <FontAwesomeIcon icon={faUserSecret} />
    return (
        <div >
          <div className="banner">
            
            <h1 className="text-light text-center title">“To Travel Is To Live”<br/><span className="fs-6">The world is a book and those who do not travel read only one page.</span><br /><button className="btn mt-3 btn-lg btn-light">Learn More</button></h1>
            
            
            </div>
          
          
          <div className="h-btn">
            <button className="rounded-pill px-5 py-3 my-3 bg-light border border-light bigB">
            <span className="special fs-5">{map}Where To?</span><span class="vl"></span>
            <span className="special  fs-5">{calender} When?</span><span class="vl"></span>
            <span className="special fs-5">{adventure} What of Adventure?</span>
            <button className="rounded-pill px-5 py-2 bg-primary text-light">Search</button>
            </button>
            
          </div>
        </div>
    );
};

export default Banner;