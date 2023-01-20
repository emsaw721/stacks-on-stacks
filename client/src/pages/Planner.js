import React, {useState, useAPI} from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_BUDGET} from '../utils/queries';
import './pages.css';

const Planner = () => {
//    const {data, isLoading} = useAPI(); 
//    const [selectedCategory, setSelectedCategory] = useState(''); 
//    const filterCategories = data.filter(budget => budget.category === selectedCategory);

    return (
        <section className='planner'>
            <h1> Your Progress Report </h1>
            <table>
                <tr>
                    <th>Category</th>
                    <th>Expected</th>
                    <th>Actual</th>
                </tr>
                <tr>
                    <td>Rent</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td>Utilities</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td>Grocery</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td>Other</td>
                    <td><input></input></td>
                </tr>
                {/* <tr><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} name='category-dropdown'></select></tr> */}
            </table>
        </section>
    )
}


export default Planner;




