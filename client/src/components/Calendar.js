import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Modalcalendar from './Modalcalendar';

const Cal = () => {
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
            <style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>
            <div>
                {isModalOpen && (
                    <Modalcalendar onClose={closeModal} calDate={calDate} />
                )}
                <div className="calendar">
                    <Calendar onChange={openLink} value={calDate} />
                </div>
            </div>
        </section >
    )
}


export default Cal;




