import React, { useState, useAPI } from 'react';
import Bar from '../components/ProgressBar';
import Cal from '../components/Calendar'
// import {useQuery} from '@apollo/client';
// import {QUERY_TRANSACTIONS} from '../utils/queries';
import './pages.css';

const Planner = () => {
//    const {data, isLoading} = useAPI(); 
//    const [selectedCategory, setSelectedCategory] = useState(''); 
//    const filterCategories = data.filter(budget => budget.category === selectedCategory);

//query so category === transactions secondCategory, then get the amount from each transaction from that second category and display 

// const {data} = useQuery(QUERY_TRANSACTIONS);
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
            <h1> Your Progress Report </h1>
            <table>
                <tr className='maincats'>
                    <th>Category</th>
                    <th>Expected</th>
                    <th>Actual</th>
                </tr>
                <tr className='subcats'>
                    <td>Rent</td>
                    <td className='expected'>
                        <input onChange={changeRent} value={rent} />
                        <button onClick={saveRent}>Save Amount</button>
                    </td>
                </tr>
                <tr className='subcats'>
                    <td>Utilities</td>
                    <td className='expected'>
                        <input onChange={changeUtil} value={util} />
                        <button onClick={saveUtil}>Save Amount</button>
                    </td>
                </tr>
                <tr className='subcats'>
                    <td>Grocery</td>
                    <td className='expected'>
                        <input onChange={changeGrocery} value={grocery} />
                        <button onClick={saveGrocery}>Save Amount</button>
                    </td>
                </tr>
                <tr className='subcats'>
                    <td>Other</td>
                    <td className='expected'>
                        <input onChange={changeOther} value={other} />
                        <button onClick={saveOther}>Save Amount</button>
                    </td>
                </tr>
                {/* <tr><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} name='category-dropdown'></select></tr> */}
            </table>
            <Cal></Cal>
            <Bar></Bar>
        </section>
    )
}


export default Planner;




