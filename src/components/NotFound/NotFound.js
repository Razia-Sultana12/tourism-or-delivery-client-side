import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../flaticons/404.jpg';

const NotFound = () => {
    return (
        <div className="text-center">
        <img src={notfound} className="img-fluid" alt="" />
        <Link to="/"><button className="bg-success btn btn-lg fw-bold mt-3 text-light">Go Back</button></Link>
        </div>

    );
};

export default NotFound;