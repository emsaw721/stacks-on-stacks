import React from 'react';
import './components.css'; 
import Auth from '../utils/auth';
import Oinkicon from './oinkicon1.png';
import Welcomeicon from './welcomepig.png';
const Header = () => {

    return (
    <section className='header'>
        {Auth.loggedIn() ? (
        <div className='loggedin'>
        <h1>Hello, Username!</h1>
        <img src={Oinkicon} /> 
        </div>
        ):(
            <div className='loggedout'>
            <h1>Welcome to Oink!</h1>
            <img src={Welcomeicon} />
            </div>
            )}
    </section>
    )
}

export default Header; 
