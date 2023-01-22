import React, { useState, useEffect} from 'react';
import decode from 'jwt-decode';
import {useQuery, useMutation} from '@apollo/client'; 
import { QUERY_MONTHEXPENSE } from '../utils/queries';
// import Bar from '../components/ProgressBar';
import Cal from '../components/Calendar'
import './pages.css';

const Planner = () => {

const {expense} = useQuery(QUERY_MONTHEXPENSE); 
const userRent = expense?.rent;

console.log(userRent); 

const [rent, setRent] = useState('');
const saveRent = () => {
    alert(rent)
}
const changeRent = (event) => {
    setRent(event.target.value); 
}
const [util, setUtil] = useState('');
const saveUtil = () => {
    alert(util)
}
const changeUtil = (event) => {
    setUtil(event.target.value); 
}

const [grocery, setGrocery] = useState('');
const saveGrocery = () => {
    alert(grocery)
}
const changeGrocery = (event) => {
    setGrocery(event.target.value); 
}

const [other, setOther] = useState('');
const saveOther = () => {
    alert(other)
}
const changeOther = (event) => {
    setOther(event.target.value); 
}
    return (
        <section className='report'>
            <style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>
            <h1> Your Progress Report </h1>
            <Cal />
            <table>
               <thead>
                <tr className='maincats'>
                    <th>Category</th>
                    <th>Expected</th>
                    <th>Actual</th>
                </tr>
                </thead>
                <tbody>
                <tr className='subcats'>
                    <td>Rent</td>
                    <td className='expected'>
                        <input onChange={changeRent} value={rent} />
                        <button onClick={saveRent}>Save</button>
                    </td>
                    {/* <td>{actual}</td> */}
                </tr>
                <tr className='subcats'>
                    <td>Utilities</td>
                    <td className='expected'>
                        <input onChange={changeUtil} value={util} />
                        <button onClick={saveUtil}>Save</button>
                    </td>
                </tr>
                <tr className='subcats'>
                    <td>Grocery</td>
                    <td className='expected'>
                        <input onChange={changeGrocery} value={grocery} />
                        <button onClick={saveGrocery}>Save</button>
                    </td>
                </tr>
                <tr className='subcats'>
                    <td>Other</td>
                    <td className='expected'>
                        <input onChange={changeOther} value={other} />
                        <button onClick={saveOther}>Save</button>
                    </td>
                </tr>
                {/* <tr><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} name='category-dropdown'></select></tr> */}
                </tbody>
            </table>
        </section>
    )
}


export default Planner;




