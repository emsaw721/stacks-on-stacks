import React, { useState } from 'react';
import './pages.css';
import { Button } from 'react-bootstrap'
import Modalexpense from '../components/Modalexpense';



const Expense = (data) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openLink = () => {        
        setIsModalOpen(!isModalOpen);
    }

    return (
        <section className="flex-row justify-center mb-4">
            <div className="col-12 col-md-6">
                <div className="card">
                    <h4 className="card-header">Expense List</h4>
                    <div className="card-body">
                        <Modalexpense show={isModalOpen} onClose={setIsModalOpen}></Modalexpense>
                        <Button type='button' variant='success' className='subbtn' onClick={openLink}>
                            Add new expense
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expense;
