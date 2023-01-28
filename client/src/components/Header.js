import React from 'react';
import './components.css';
import Auth from '../utils/auth';
import Oinkicon from './oinkicon1.png';
import Welcomeicon from './welcomepig.png';
import decode from 'jwt-decode'; 

const Header = () => {
const loggedIn = Auth.loggedIn();
 if(loggedIn) {
    const idtoken = localStorage.getItem('id_token');    

    const decoded = decode(idtoken);    

    const username = decoded.data.username;
    return (
        <section className='header'>
        <style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>
<div className='loggedin'>
                    <h1>Hello, {username}!</h1>
                    <img src={Oinkicon} alt="" />
                </div>
</section>
    )
} 
else {
    return (
        <section className='header'>
        <style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>
        <div className='loggedout'>
        <h1>Welcome to Oink!</h1>
        <img src={Welcomeicon} alt="" />
    </div>
    </section>
    )
}
}

export default Header; 
