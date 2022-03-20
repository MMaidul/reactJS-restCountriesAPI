import React from 'react';
import './Country.css';

const Country = ({ country }) => {
    const { name, flags, capital, population, area } = country;
    const languages = country.languages;
    console.log(languages);
    return (
        <div className='country__info'>
            <h3>{name}</h3>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Languages: {languages.map(lg => lg.name).join(',')}</p>
        </div>
    );
};

export default Country;