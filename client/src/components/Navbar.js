import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Tab, Nav } from 'react-bootstrap';
import './components.css';
import Navpig from './oinktranspig.png';
import Modalnav from './Modalnav'; 
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm'; 

import Auth from '../utils/auth';

const Navbar = () => {
   
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openLink = () => {
        setIsModalOpen(isModalOpen);
    }


    const closeModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    

    return (
        <>
        <section className='navcontainer'>
<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>
            <>
            {/* {Auth.loggedIn() ? ( */}
            <nav className='navbar' >
                <ul className='nav-list'>
                    <li className='nav-item dash-icon'>
                        {/* <Link to '/dashboard' className='nav-link'> */}
                        <img src={Navpig} alt="pig" />
                         {/* </Link> */}
                    </li>
                    <li className='nav-item'>
                        <Link to='/expense' className='nav-link'>
                        <span className='link-text'>Expense</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/planner' className='nav-link'>
                            <span className='link-text'>Report</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' onClick={Auth.logout}>
                            <span className='link-text'>Logout</span>
                        </Link>
                    </li>
                    </ul>
            </nav>
{/* //                      ):( */}
{/* //                         <nav className='navbar' >
//                             <style>
//   @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
// </style>
//                         <ul className='nav-list'>
//                           <li className='nav-item'>
//                           <Modalnav show={isModalOpen} onClose={setIsModalOpen}></Modalnav>
//                         <span  className='link-text' onClick={openLink}>Signup/Signin</span>
//                             </li>
//                      </ul>
//                      </nav> )} */}
             </>
            </section>
</>
    )
};

export default Navbar; 
