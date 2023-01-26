import React from 'react';
import Bar from './ProgressBar'; 
import './components.css';
import Auth from '../utils/auth';

const Hero = () => {
    return(
        <>
        {Auth.loggedIn() ? (
        <div className='hero'>
            <h4>Remaining Account Balance</h4>
            <Bar />
        </div>
        ):(
            <div className='heronone'></div>
        )}
        </>
    )
}

export default Hero; 