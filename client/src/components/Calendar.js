import React, { useState } from 'react'
import './pages.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Modal from './Modalcalendar';

const Planner = () => {
    const [calDate, onCalDateChange] = useState(new Date())
    const [isModalOpen, setIsModalOpen] = useState(false);
 

    // function to open calendar on a given day and view expenses and or income
    const openLink = (calDate) => {
        onCalDateChange(calDate);
        setIsModalOpen(!isModalOpen);
    }

    const closeModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        < section className='Calendar'>
            <div>
                {isModalOpen && (
                    <Modal onClose={closeModal} calDate={calDate} />
                )}
                <div className="calendar">
                    <Calendar onChange={openLink} value={calDate} />
                </div>
            </div>
        </section >
    )
}


export default Planner;




