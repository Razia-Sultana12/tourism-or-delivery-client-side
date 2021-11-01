import React from 'react';

const NewsShelter = () => {
    return (
        <div>
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
             </div>
       
    );
};

export default NewsShelter;