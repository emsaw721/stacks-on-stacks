import React, { useState } from 'react'
import './pages.css';
import Calendar from 'react-calendar'

const Planner = () => {
    const [value, onChange] = useState(new Date());
  
    return (
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    );
}  


export default Planner;


