import React from 'react';

import visa from '../flaticons/visa.png';
import paypal from '../flaticons/paypal.png';
import maestro from '../flaticons/maestro.png';
import am from '../flaticons/american-express.png';
import cd from '../flaticons/credit-card.png';
import fb from '../flaticons/5296499_fb_facebook_facebook logo_icon.png';
import twitter from '../flaticons/5296515_bird_tweet_twitter_twitter logo_icon.png';
import insta from '../flaticons/3225191_app_instagram_logo_media_popular_icon.png';
import linkedin from '../flaticons/317750_linkedin_icon.png';
import youtube from '../flaticons/3225180_app_logo_media_popular_social_icon.png';
import like from '../flaticons/like.png';

const Footer = () => {
   
    return (
        <div >
            <hr />
            <div className="row justify-content-between">
            
            <div className="col-md-4 col-12 pt-3">
                <img src={fb} alt="" /><img className="mx-2" src={insta} alt="" /><img src={twitter} alt="" /><img className="mx-2" src={linkedin} alt="" /><img src={youtube} alt="" />
                
            </div>
            <div className="col-md-4 col-12">
               <small><img className="mx-2" width="100" height="100" src={like} alt="" />612k people like this.Be the first of your friends</small>
            </div>
            <div className="col-md-4 col-12 pt-3">
                <img src={visa} alt="" /><img className="mx-2" src={maestro} alt="" /><img src={am} alt="" /><img className="mx-2" src={paypal} alt="" /><img src={cd} alt="" />
            </div>
            
            </div>
            
            
            
            <hr /> 
            <p className="text-center">Copyright © TourHour. All rights reserved. Legal notice</p>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Need help?</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">TourHour Helper</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
        <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Email</label>
            <input type="text" placeholder="enter your email" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" placeholder="send your message here..." id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Footer;