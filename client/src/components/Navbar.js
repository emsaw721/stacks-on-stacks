import React  from 'react'; 
import {Link} from 'react-router-dom';
// import Expense from './pages/Expense';
// import Income from './pages/Income';
// import Planner from './pages/Planner';
// import Dashboard from './pages/Dashboard'; 
// import Signout from './pages/Signout'; 
import Auth from '../utils/auth';
import './components.css'; 
import Navpig from './oinktranspig.png'; 

const Nav = () => {
    return(
        <nav className='navbar' >
            <ul className='nav-list'>
                    <img src={Navpig} />
             
                {/* <li className='nav-item'>
                    <Link to {...Expense} className='nav-link'>
                        <span className='link-text'>Expense</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to {...Income} className='nav-link'>
                        <span className='link-text'>Income</span>
                    </Link>
                </li>
                <li className='dash-icon'>
                    <Link to {...Dashboard} className='nav-link'>
                        <img src={Navpig} />
                    </Link>
                </li> */}
                {/* <li className='nav-item'>
                    <Link to {...Planner} className='nav-link'>
                        <span className='link-text'>Budget Planner</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to {...Signout} className='nav-link'>
                        <span className='link-text'>Signout</span>
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
};

export default Nav; 