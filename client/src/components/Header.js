import React from 'react';
import { useQuery } from '@apollo/client';
import {QUERY_ME} from '../utils/queries'; 
import './components.css';
import Auth from '../utils/auth';
import Oinkicon from './oinkicon1.png';
import Welcomeicon from './welcomepig.png';
import decode from 'jwt-decode';



const Header = () => {

    // const {data} = useQuery(QUERY_ME);
    // const userData = data?.me; 
    // //const userDataLength = Object.keys(userData); 
    // console.log(userData.username); 

    const token = localStorage.getItem('id_token');
     console.log(token); 

    const username = (token); 
    
    // if (token) {
    //     const decoded = decode(token); 
    //    username = decoded.data.username
    // }
  
    // console.log(userDataLength); 

    return (
        <section className='header'>
            <style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>
            {Auth.loggedIn() ? (
                <div className='loggedin'>
                    <h1>Hello,{username}!</h1>
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
