import React  from 'react'; 
import {Link} from 'react-router-dom';
import './components.css'; 
import Navpig from './oinktranspig.png'; 

// import Expense from './pages/Expense';
// import Income from './pages/Income';
// import Planner from './pages/Planner';
// import Dashboard from './pages/Dashboard'; 
// import Signout from './pages/Signout'; 

const Nav = () => {
    return(
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
                    <Link to={'/planner'} className='nav-link'>
                        <span className='link-text'>Planner</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    {/* <Link to '/signout' className='nav-link'> */}
                        <span className='link-text'>Signout</span>
                    {/* </Link> */}
                </li>
            </ul>
        </nav>
        </section>
    )
};

export default Nav; 
