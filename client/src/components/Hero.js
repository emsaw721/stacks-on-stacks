import React from 'react';
import Bar from './ProgressBar'; 
import './components.css';
import Auth from '../utils/auth';

const Hero = () => {
    return(
        <>
        <style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>

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