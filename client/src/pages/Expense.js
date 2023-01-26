import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import decode from 'jwt-decode';
import './pages.css';
import { Button } from 'react-bootstrap'
import Modalexpense from '../components/Modalexpense';
import { useQuery } from '@apollo/client'; 
import { QUERY_TRANSACTION } from '../utils/queries';; 
 

const Expense = (data) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openLink = () => {        
        setIsModalOpen(!isModalOpen);
    }

    // const {transactions} = useQuery(QUERY_TRANSACTION);

    const transactionData = localStorage.getItem('transaction'); 
    console.log(transactionData); 



    const oneExpense = transactionData.secondcategory; 
    console.log(oneExpense); 

    // const [Expenses] = useState();
    // let getExpensesList= Expenses.map((expenses) => {
    //     return <li>{expenses}</li>
    // }); 

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
                        <ul>
                            {/* <li>{getExpensesList}</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expense; 