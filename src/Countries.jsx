import React, { use, useState } from 'react';
import Country from './Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] =useState([]);
    const handleVisitedCountries = (country) => {
        // console.log("Handle visited Countries",country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        // console.log('Flag need to be added',flag)
        const newVisitedFlags = [...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags)
    }
    // console.log(countries)
    return (
        <div >
            <h1>In the Countries: {countries.length} </h1>
            <h3>Total Country Visited: {visitedCountries.length} </h3>
            <h3>Total visited Flags: {visitedFlags.length}</h3>

            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} 
                        country={country}
                        handleVisitedCountries = {handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;