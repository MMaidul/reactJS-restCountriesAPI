import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    // console.log(countries);
    return (

        <div className='heading'>
            <h2>Virtual travel Countries</h2>
            <div className='countries__info'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;