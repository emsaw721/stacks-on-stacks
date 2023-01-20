import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Tab, Nav } from 'react-bootstrap'
import './components.css';
import Navpig from './oinktranspig.png';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm'
import Auth from '../utils/auth';

// import Expense from './pages/Expense';
// import Income from './pages/Income';
// import Planner from './pages/Planner';
// import Dashboard from './pages/Dashboard'; 



const AppNav = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        // {Auth.loggedin() ? (
        <section className='navcontainer'>
            <nav className='navbar' >
                <ul>
                    <li className='nav-item'>
                        {/* <Link to '/expense' className='nav-link'> */}
                        <span className='link-text'>Expense</span>
                        {/* </Link> */}
                    </li>
                    <li className='nav-item'>
                        {/* <Link to '/income' className='nav-link'> */}
                        <span className='link-text'>Income</span>
                        {/* </Link> */}
                    </li>
                    <li className='dash-icon'>
                        {/* <Link to '/dashboard' className='nav-link'> */}
                        <img src={Navpig} />
                        {/* </Link> */}
                    </li>
                    <li className='nav-item'>
                        <Link to='/planner' className='nav-link'>
                            <span className='link-text'>Planner</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={Auth.logout}>
                            <span className='link-text'>Signout</span>
                        </Link>
                    </li>
                    {/* ):(<li className='nav-item'> */}
                        <Nav.Link onClick={() => setShowModal(true)}>
                            Login/Signup
                        </Nav.Link>
                    {/* </li> )}*/}
                </ul>
            </nav>
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
                                <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
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

export default AppNav; 
