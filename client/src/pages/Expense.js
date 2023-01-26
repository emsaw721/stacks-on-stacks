import React, {useEffect, useState} from 'react';
import './pages.css';
import {Button, Table} from 'react-bootstrap'
import Modalexpense from '../components/Modalexpense';
import {useMutation, useQuery} from "@apollo/client";
import {QUERY_TRANSACTIONS} from "../utils/queries";
import {REMOVE_TRANSACTION} from "../utils/mutations";

const Expense = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const {data} = useQuery(QUERY_TRANSACTIONS);
    const [removeTransaction] = useMutation(REMOVE_TRANSACTION);

    useEffect(() => {
        if (!data) return;
        console.log(data);
    }, [data])

    const openLink = () => {        
        setIsModalOpen(!isModalOpen);
    }

    const deleteExpense = async (expenseId) => {
        await removeTransaction({
            variables: {
                id: expenseId
            }
        });
    }

    return (
        <>
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
            <section>
                <Table>
                    <thead>
                        <tr>
                            <th>Transaction date</th>
                            <th>Transaction amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data?.transactions.map(t => {
                            return (
                                <tr>
                                    <td>{t.date}</td>
                                    <td>{t.amount}</td>
                                    <td>
                                        <Button onClick={() => deleteExpense(t._id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </section>
        </>
    );
};

export default Expense; 