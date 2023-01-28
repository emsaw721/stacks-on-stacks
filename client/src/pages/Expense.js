import React, {useEffect, useState} from 'react';
import './pages.css';
import {Button, Table} from 'react-bootstrap'
import Modalexpense from '../components/Modalexpense';
import {useMutation, useQuery} from "@apollo/client";
import {QUERY_TRANSACTIONS} from "../utils/queries";
import { REMOVE_TRANSACTION } from "../utils/mutations";
import { format } from "date-fns"

const Expense = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data } = useQuery(QUERY_TRANSACTIONS);
    const [expenseList, setExpenseList] = useState([])
    const [removeTransaction] = useMutation(REMOVE_TRANSACTION, {
        refetchQueries:[QUERY_TRANSACTIONS]
    });

    useEffect(() => {
        if (!data) return;
        console.log(data);
        const yearMonth = format(new Date(), "yyyyMM");
        let e = data.transactions
        .filter(t => t.firstcategory === 'Expense' && t.yearmonth === yearMonth)        
    setExpenseList(e)
    console.log(e)
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
        <section className="flex-row mb-4 d-flex justify-content-center">
            <div className="col-12 col-md-6">
                <div className="card text-center">
                    <h3 className="card-header">Expense List</h3>
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
                            <th>Expense</th>
                            <th>Transaction amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        expenseList.map(t => {
                            return (
                                <tr key={t._id}>
                                    <td>{format(new Date(t.date), 'yyyy-MM-dd')}</td>
                                    <td>{t.secondcategory}</td>
                                    <td>{t.amount}</td>
                                    <td>
                                        <Button onClick={() => { deleteExpense(t._id) }}>Delete</Button>
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