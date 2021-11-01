import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Booking from '../Booking/Booking';



const MyOrders = () => {
    const { user } = useAuth();
    const [myBookings, SetMyBookings] = useState([])
    useEffect(() => {
        const url = `https://safe-brook-92113.herokuapp.com/bookings${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => SetMyBookings(data))

    }, [])



    return (
            <div>
                <div>
                    <h2>My Bookings</h2>
                </div>
                <div className="container mt-5">
                    {
    
                        myBookings?.map(booking => <Booking
                            booking={booking}
                            key={booking._id}
                        ></Booking>)
    
                    }
            </div>
            </div>
        );
    
    
};

export default MyOrders;