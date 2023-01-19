import React, { useState } from 'react'
// import { Doughnut } from 'react-chartjs-2';
import './pages.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Modal from '../components/Modal';

const Planner = () => {
    // set states of calendar date
    const [calDate, setCalDate] = useState(new Date())

    //set states to modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const [categories] = ([
    //     {

    //     }
    // ])


    // function to open calendar on a given day and view expenses and or income
    const openLink = (onChange, calDate) => {
        setCalDate({ ...onChange, calDate });
        setIsModalOpen(!isModalOpen);
    }




    return (
        < section className='planner' >
            <h1> You Budget Planner </h1>
            {/* <Doughnut data={{
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
            /> */}
            <div>
                {isModalOpen && (
                    <Modal onClose={openLink} calDate={calDate} />
                )}
                <div className="calendar">
                    <Calendar onclick={() => openLink(onChange, )} value={calDate} />
                </div>
            </div>
        </section >
    )

}

export default Planner; 