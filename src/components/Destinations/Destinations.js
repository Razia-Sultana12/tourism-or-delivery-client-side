import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [countries,setCountries]=useState([]);
    useEffect(() => {
        fetch('https://safe-brook-92113.herokuapp.com/countries')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    return (
        <div>
             <div>
            <h2 className="text-primary mt-5">Our Destinations</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-3">
                {
                    countries.map(country => <Destination key={country._id}
                        country={country}></Destination>)
                }
            </div>
        </div>
        </div>
    );
};

export default Destinations;