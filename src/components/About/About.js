import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelopeSquare, faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const email = <FontAwesomeIcon icon={faEnvelopeSquare} />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phone = <FontAwesomeIcon icon={faPhoneAlt} />
    
    return (
        
        <div>
            <Header></Header>
            <h2 className="m-5 text-primary">About Us</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
                    <h3 className="text-secondary">Our Services</h3>
                    <p>We provide you the best service of the town!Its a renowed company every year we provide 500+ tours world wide.People enjoy with us.Journey with us absolutely safe & secure.Your happiness our pleasure!</p>
                </div>
                <div className="col">
                    <h3 className="text-secondary">Our Offers</h3>
                    <p>Every year December to January we provide more then 100+ offers.And this is the best time for vacation.Spent your joyful moment by travelling the world.Our offers is a way to show our love for our customers.
                    </p>
                </div> 
                <div className="col">
                    <h3 className="text-secondary">Contact Us</h3>
                    <p>{map} Address:#2 tower,HongKong Street.</p>
                    <p>{phone} Phone: 000111222</p>
                    <p>{email} Email: tourhour@gmail.com</p>
                    
                </div>  
                </div>
                
               <div className="row m-5">
                   <h2 className="text-primary m-3">Freaquently Asked Questions</h2>
                <div className="col-12 col-md-7">   
               <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        How safe the travelling spots for children?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The places are absolutely safe & secure for baby & kids.You can go & enjoy without any worried.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Can I go Alone?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes,Of course You can!Even if you want we can provide you tour partner too!</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingthree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethree" aria-expanded="false" aria-controls="flush-collapsethree">
      What are the most surreal places to visit?
      </button>
    </h2>
    <div id="flush-collapsethree" class="accordion-collapse collapse" aria-labelledby="flush-headingthree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Some of the strangest places on earth are also the most sublime: from the UFO-like dragon's blood trees in Yemen to a rainbow-colored hot spring in Yellowstone to a bridge in Germany that looks like a leftover prop from Lord of the Rings</div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      Do you have to be rich to travel the world?
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The beauty of travel is that it???s accessible to everyone, in some form. You don't have to go far to experience a new culture. Plus there are several ways to make most flights affordable, whether by being flexible, searching on new websites like Skypicker and Fareness, or just by planning ahead. Know the best time to book a flight: 57 days in advance for domestic flights, 117 for international. Then again, you could just make traveling the world your 9-to-5.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      Where are the best places to travel alone?
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Well, we certainly don't recommend Tahiti, where there's an all-but-constant reminder at every juncture that you are alone, a sad friendless figure lurking amid the glowing honeymooners. There are a few places, though, where visiting solo is a bonus, not a burden: notably cruises, yoga retreats, and treks across Europe.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      What are the most beautiful beaches in the world?
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Antigua may claim to have 365 beaches, one each for every day of the year, but other strips of sand rival the Caribbean island for sheer beauty (we???ll take quality over quantity any time). Here are some suggestions, from an overlooked island in the Philippines to a beach made up of jet black sand in Hawaii.</div>
    </div>
  </div>
</div>
</div>
<div className="col-12 col-md-5 mx-auto">
<img src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?size=338&ext=jpg" alt="" /></div>
<div>
                    <h2 className="text-primary m-3">24/7 Customer Support</h2>
                    <p>Our team of experienced tour specialists have travelled to hundreds of countries around the globe and have decades of first-hand travel experience to share. Contact us now to have all of your tour-related questions answered!</p>
                    <button className="btn btn-lg bg-primary text-light">Contact Us</button>
               </div>
               </div>
               <div className="row bg-dark p-5 text-light">
                   <div className="col-12 col-md-7">
                   <h3>Sign up for Our Newsletter</h3>
<p>Save up to 50% on tours! Get exclusive access to members only deals by email.</p>

                   </div>
                   <div className="col-12 col-md-5">
                   <div class="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary btn-primary text-light" type="button" id="button-addon2">Subscribe</button>
</div>
                       <p>By submitting this form, I agree to the TourRadar <span className="text-primary">
                    T&Cs</span> and <span className="text-primary">Privacy policy</span>.</p>

                   </div>
               </div>

            <Footer></Footer>
        </div>
    );
};

export default About;
 