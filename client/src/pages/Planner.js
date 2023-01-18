import React from 'react';
import './components.css'; 
import Auth from '../utils/auth';

const Header = () => {

    return (
    <section className='header'>
        <h1>This is the header!</h1>
            {/* {Auth.loggedin() ? (
                <div className='header'>
                <h1> Hello, Username! </h1>
                </div>
            ):(  <div className='header'>
            <h1>This is the header, maybe?</h1>
            </div>)} */}
    </section>
    )
}

export default Header; 
