import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Destination = ({country}) => {
  
    const { _id, title,time,offer, price, description, image,review,reviewNum } = country;
    const star = <FontAwesomeIcon icon={faStar} />
    const heart = <FontAwesomeIcon icon={faHeart} />

    
    return (
            <div>
  <div class="col">
    <div class="card text-start">
      <img src={image} width="272" height="193" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <p>{time} <strong>{review}</strong> <small className="text-warning">{star}</small> ({reviewNum})</p>
        <p>From <del>{price}</del>  <strong className="text-danger">{offer}</strong></p>
        <Link to={`/booking/${_id}`}><button className="btn text-danger border-3 border-secondary">{heart} Book Now</button></Link>
        
      </div>
    </div>
  </div>
        </div>
    );
};

export default Destination;