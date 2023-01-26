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

    let transactionsArr = []; 

    const transactionData = localStorage.getItem('expenses'); 
    console.log(transactionData); 
    transactionsArr.push(transactionData); 

    console.log(transactionsArr); 


    // const transactionObj = JSON.parse(transactionData); 
    // console.log(transactionObj); 

    // const oneExpense = transactionObj.addTransaction.secondcategory; 
    // console.log(oneExpense); 


    return (
        <section className="flex-row justify-center mb-4">
            <div className="col-12 col-md-6">
                <div className="card">
                    <h4 className="card-header">Expense List</h4>
                    <div className="card-body">
                    <ul>
                            <li></li>
                    </ul>
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