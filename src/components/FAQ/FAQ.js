import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewsShelter from '../NewsShelter/NewsShelter';
import TopDestinations from '../TopDestinations/TopDestinations';

const FAQ = () => {
    return (
        <div>
            <Header></Header>
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
      <div class="accordion-body">The beauty of travel is that it’s accessible to everyone, in some form. You don't have to go far to experience a new culture. Plus there are several ways to make most flights affordable, whether by being flexible, searching on new websites like Skypicker and Fareness, or just by planning ahead. Know the best time to book a flight: 57 days in advance for domestic flights, 117 for international. Then again, you could just make traveling the world your 9-to-5.</div>
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
      <div class="accordion-body">Antigua may claim to have 365 beaches, one each for every day of the year, but other strips of sand rival the Caribbean island for sheer beauty (we’ll take quality over quantity any time). Here are some suggestions, from an overlooked island in the Philippines to a beach made up of jet black sand in Hawaii.</div>
    </div>
  </div>
</div>
</div>
<div className="col-12 col-md-5 mx-auto">
<img src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?size=338&ext=jpg" alt="" /></div>
        </div>
        <TopDestinations></TopDestinations><br />
        <NewsShelter></NewsShelter>
        <Footer></Footer>
        </div>
    );
};

export default FAQ;