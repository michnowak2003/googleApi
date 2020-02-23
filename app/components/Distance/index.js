/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';


const Distance = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const fetchDistance = async (origins, destinations) => {
        const key = 'AIzaSyBLbtZN1-v_T7dxGfs53fl7jqu5iGDdBWE';

        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?key=${key}&origins=${origins}&destinations=${destinations}`;

        const response = await fetch(url)
        return response.json(); // parses JSON response into native JavaScript objects
    }

    return (
        <div>
            <label htmlFor="originField">Origin</label>
            <input onChange={e => setOrigin(e.target.value)} type="text" id="originField" />

            <label htmlFor="destinationField">Destination</label>
            <input onChange={e => setDestination(e.target.value)} type="text" id="destinationField" />

            <button type='submit' onClick={() => console.log(fetchDistance(origin, destination))}>Calculate</button>
        </div>
    )
};

export default Distance;
