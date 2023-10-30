import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Tab, Nav } from 'react-bootstrap';
import './components.css';
import Navpig from './oinknav.png';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm'
import Auth from '../utils/auth';

const Navbar = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <section className='navcontainer'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
            </style>
            <>
                {Auth.loggedIn() ? (
                    <nav className='navbar' >
                        {/* <div>
                                <Link to='/dash' className='nav-link'>
                                <img src={Navpig} alt="pig" />
                                </Link>
                        </div> */}
                        <ul className='nav-list'>
                            <li className='navigation-item'>
                                <Link to='/dash' className='nav-link'>
                                    <span className='link-text'>Dashboard</span>
                                </Link>
                            </li>
                            <li className='navigation-item'>
                                <Link to='/income' className='nav-link'>
                                    <span className='link-text'>Income</span>
                                </Link>
                            </li>
                            <li className='navigation-item'>
                                <Link to='/expense' className='nav-link'>
                                    <span className='link-text'>Expense</span>
                                </Link>
                            </li>
                            <li className='navigation-item'>
                                <Link to='/planner' className='nav-link'>
                                    <span className='link-text'>Report</span>
                                </Link>
                            </li>
                            <li className='navigation-item'>
                                <Link className='nav-link' onClick={Auth.logout}>
                                    <span className='link-text'>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                ) : (
                    <nav className='navbar' >
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
                        </style>
                        <ul>
                            <li className='navigation-item'>
                                <Nav.Link className='loggedoutlink' onClick={() => setShowModal(true)}>
                                    Login/Signup
                                </Nav.Link>
                            </li>
                        </ul>
                    </nav>)}
            </>
            {/* set modal data up */}
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item className='modal-login'>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='modal-signup'>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignUpForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </section>
    )
};

export default Navbar; 
