import { useState, useEffect } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    
    fetch("https://safe-brook-92113.herokuapp.com/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
    
    return { countries };
};

export default useCountries;
