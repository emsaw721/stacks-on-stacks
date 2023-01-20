import React  from 'react'; 
import {Link} from 'react-router-dom';
import './components.css'; 
import Navpig from './oinktranspig.png'; 
import Auth from '../utils/auth';

const Nav = () => {
    return(
        // {Auth.loggedin() ? (
        <section className='navcontainer'>
        <nav className='navbar' >
            <ul className='nav-list'>
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
                        <span className='link-text'>Report</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link onClick={Auth.logout}>
                        <span className='link-text'>Signout</span>
                    </Link>
                </li>
            </ul>
        </nav>
        </section>
        // ):()};
    )
};

export default Nav; 
