import React, { useState } from 'react'
import './pages.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Planner = () => {
    const [value, onChange] = useState(new Date());
  
    return (
      <div className="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
    );
}  


export default Planner;


