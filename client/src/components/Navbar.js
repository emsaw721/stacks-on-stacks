import React  from 'react'; 
import {Link} from 'react-router-dom';
import './components.css'; 
import Navpig from './oinktranspig.png'; 
import Auth from '../utils/auth';

<<<<<<< HEAD
// import Expense from './pages/Expense';
// import Income from './pages/Income';
// import Planner from './pages/Planner';
// import Dashboard from './pages/Dashboard'; 
 

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
function Nav({currectPage, handlePageChange}) {
    return(
        
    )
}
>>>>>>> cefb9227 (i'm exaustion typing and its not helping)
>>>>>>> 75cfa646 (i'm exaustion typing and its not helping)

>>>>>>> fa9f569a (added calendar)
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
                        <span className='link-text'>Planner</span>
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
=======
function Nav({currectPage, handlePageChange}) {
    return(
        
    )
}
>>>>>>> 38be5c00 (i'm exaustion typing and its not helping)

export default Nav; 
