import React from 'react';
import './components.css'; 
import Auth from '../utils/auth';
import Oinkicon from './oinkicon1.png';

const Header = () => {

    return (
    <section className='header'>
        <h1>This is the header!</h1>
        <h2>It will display Oink! when not signed in</h2>
            {/* {Auth.loggedin() ? (
                <div className='header'>
                <h1> Hello, Username! </h1>
                </div>
            ):(  <div className='header'>
            <h1>This is the header, maybe?</h1>
            </div>)} */}
        <img src={Oinkicon} />
    </section>
    )
}

export default Header; 
