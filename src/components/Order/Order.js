
import React from 'react';

const Order = ({booking}) => {
    const handleDelete =(id) =>{
        if (window.confirm("Delete the item?")) {
            
            const url=`https://safe-brook-92113.herokuapp.com/bookings/${id}`
            fetch(url,{
                method:'DELETE'
            })
            
            .then(res => res.json())
            .then(data => {
                window.location.reload();
            })
            
        }
        else{
            return;
        }
       
    }
    const {booking_details}=booking;
    const { title,image,offer,time,price,review,reviewNum,description }=booking_details;
    return (
        <div>
            <div className="tour_Cart">
                <img src={image} alt="" />
                <div className="p-2">
                    <div className="d-flex">
                        <h5 className="me-5">${offer}/Per Person</h5>
                        <h5 >{time}</h5>
                    </div>
                    <h2 className="custom_color">{title}</h2>
                    <button className="m-auto me-5 mt-5 cencel-btn" onClick={()=> handleDelete(booking_details._id)}>Cancel Order</button>
                    <button className=" mt-5 status-btn" >{booking_details.status.status}</button>
                </div>
            </div>
             
        </div>
    );
};

export default Order;
