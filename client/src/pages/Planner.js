import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import './pages.css';


const Planner = () => {

    return (
        <section className='planner'>
        <h1> Your Budget Planner </h1>
    <Doughnut data={{
        datasets: [
            {
                id: 1,
                label: 'Expense1',
                data: [5,6,7],
            },
            {
                id: 2,
                label: 'Expense2',
                data: [3,2,1]
            },
            {
                id: 3, 
                label: 'Expense3',
                data: [7,8,9]
            },
        ],
    }}
    />
    </section>
    )
}


export default Planner;




