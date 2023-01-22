import React from 'react';
import './components.css';
import Auth from '../utils/auth';
import Oinkicon from './oinkicon1.png';
import Welcomeicon from './welcomepig.png';
import decode from 'jwt-decode';


const Header = () => {

    let username = ""
    const token = localStorage.getItem('id_token')
    
    if (token) {
        const decoded = decode(token); 
       username = decoded.data.username
    }

    return (
        <section className='header'>
            {Auth.loggedIn() ? (
                <div className='loggedin'>
                    <h1>Hello, { username}!</h1>
                    <img src={Oinkicon} alt="" />
                </div>
            ) : (
                <div className='loggedout'>
                    <h1>Welcome to Oink!</h1>
                    <img src={Welcomeicon} alt="" />
                </div>
            )}
        </section>
    )
}

export default Header; 
