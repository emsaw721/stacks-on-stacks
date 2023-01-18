import React, { useState } from 'react'
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
        <div className="calendar">
            <Calendar onChange={onChange} value={calDate} />
        </div>
    )

}


export default Planner;


