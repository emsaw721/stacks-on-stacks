import React  from 'react'; 
import {Link} from 'react-router-dom';
import './components.css'; 
import Navpig from './oinktranspig.png'; 

// import Expense from './pages/Expense';
// import Income from './pages/Income';
// import Planner from './pages/Planner';
// import Dashboard from './pages/Dashboard'; 
// import Signout from './pages/Signout'; 

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> fa9f569a (added calendar)
const Nav = () => {
    return(
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
                    {/* <Link to '/planner' className='nav-link'> */}
                        <span className='link-text'>Budget Planner</span>
                    {/* </Link> */}
                </li>
                <li className='nav-item'>
                    {/* <Link to '/signout' className='nav-link'> */}
                        <span className='link-text'>Signout</span>
                    {/* </Link> */}
                </li>
            </ul>
        </nav>
    )
};
=======
function Nav({currectPage, handlePageChange}) {
    return(
        
    )
}
>>>>>>> 38be5c00 (i'm exaustion typing and its not helping)

export default Nav; 
