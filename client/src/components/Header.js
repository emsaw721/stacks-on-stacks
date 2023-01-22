import React, {useState, useEffect} from 'react';
import './components.css';
import Auth from '../utils/auth';
import Oinkicon from './oinkicon1.png';
import Welcomeicon from './welcomepig.png';
import decode from 'jwt-decode';


const Header = () => {
    const [user, setUser] = useState("username")

    useEffect(() => {
      localStorage.setItem('username', JSON.stringify(user)); //changed
    }, [user]);
  console.log(user)
    const userName = JSON.parse(localStorage.getItem('userFormData.username')) //changed
    console.log(userName)

    return (
        <section className='header'>
            <style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>
            {Auth.loggedIn() ? (
                <div className='loggedin'>
                    <h1>Hello, {userName}!</h1>
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
