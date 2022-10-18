import React from 'react'
import { useState, useEffect } from 'react'

const CountryDetail = ({ ipnumber, location, timezone, region, country, data2}) => (
    <div className='countryDetails'>
        <p className="myDetails">MY IP IS: {ipnumber}</p>
        <p className="myDetails">City: {location}</p>
        <p className="myDetails">Region: {region}</p>
        <p className="myDetails">Timezone: {timezone}</p>
        <p className="myDetails">Capital of {country} is: {data2[175]?.capital}</p>
        <p className="myDetails">Flag: {data2[175]?.flag}</p>
    </div>
)

export default CountryDetail
