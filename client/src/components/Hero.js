import React from 'react';
import Bar from './ProgressBar'; 
import './components.css';
import Auth from '../utils/auth';

const Hero = () => {
    return(
        <>
        {Auth.loggedIn() ? (
        <div className='hero'>
            <Bar />
        </div>
        ):(
            <div className='heronone'></div>
        )}
        </>
    )
}

export default Hero; 