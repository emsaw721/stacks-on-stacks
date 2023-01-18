import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import './pages.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Planner = () => {
    // set states of calendar date
    const [calDate, setCalDate] = useState(new Date())

    function onChange(calDate) {
        setCalDate(calDate)

    }

    // function to open calendar on a given day and view expenses and or income


    return (
        < section className='planner' >
            <h1> You Budget Planner </h1>
            <Doughnut data={{
                datasets: [
                    {
                        id: 1,
                        label: 'Expense1',
                        data: [5, 6, 7],
                    },
                    {
                        id: 2,
                        label: 'Expense2',
                        data: [3, 2, 1]
                    },
                    {
                        id: 3,
                        label: 'Expense3',
                        data: [7, 8, 9]
                    },
                ],
            }}
            />
            <div className="calendar">
                <Calendar onChange={onChange} value={calDate} />
            </div>
        </section >
    )
}


export default Planner;




