import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { bookingId } = useParams();
    const [booking, setBooking] = useState([])

    useEffect(() => {
        const url = `https://safe-brook-92113.herokuapp.com/countries/${bookingId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    // const status ="Pending"
    
    const { title,image,price,offer,description,review,reviewNum,time } = booking;
    const onSubmit = (data) => {
        const update={
            status:"Pending"
        }
        data.status=update;
        data.countries=booking;
        data.email = user?.email;
        fetch("https://safe-brook-92113.herokuapp.com/countries", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
              
          });
          alert("Congrats!!You have successfully booked an event on your calendar!")
       
      };
    
    return (
       <div> 
          <Header></Header>
               <h1 className="text-primary">Booking Details </h1>
           
            <div className="row m-5">
            <div class="card text-start col-12 col-md-5">
      <img src={image} class=" card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <p>{time} <strong>{review}</strong> <small className="text-warning"></small> ({reviewNum})</p>
        <p>From <del>{price}</del>  <strong className="text-danger">{offer}</strong></p></div>
        </div>
            
               <div className="col-md-7 col-12">
                    <form  onSubmit={handleSubmit(onSubmit)} >

                        <input className="px-3 rounded-3 border-info " defaultValue={user.displayName} {...register("full_name")} />
                        <br />
                        <input className="px-3 rounded-3 border-info my-2" defaultValue={user.email} {...register("email", { required: true })} />
                        <br />
                        
                        <input className="px-3 rounded-3 border-info" placeholder="Address" defaultValue="" {...register("address")} />
                        <br />
                        <input className="px-3 rounded-3 border-info my-2" placeholder="City" defaultValue="" {...register("city")} />
                        <br />
                        <input className="px-3 rounded-3 border-info" placeholder="phone number" defaultValue="" {...register("phone")} />
                        <br />
                        <Link to="/order"><input type="submit" value="Confirm" className="btn  rounded-3 btn-primary mt-3" /></Link>
                    </form>
                    </div>
                    </div>
                    <Footer></Footer>
                </div>
        
    );
};

export default Booking;