import React, { useState, useEffect } from 'react';
import './pages.css';
import { Button, Table } from 'react-bootstrap'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_TRANSACTIONS } from '../utils/queries';
import { REMOVE_TRANSACTION } from '../utils/mutations';
import { format } from "date-fns"
import Modalincome from '../components/Modalincome';



const Income = () => {

    const [incomeTotal, setIncomeTotal] = useState([])
    const { data } = useQuery(QUERY_TRANSACTIONS);
    const [removeTransaction] = useMutation(REMOVE_TRANSACTION);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        if (!data) return;
        console.log(data)
        const yearMonth = format(new Date(), "yyyyMM");
        let i = data.transactions
            .filter(t => t.firstcategory === 'Income' && t.yearmonth === yearMonth)
        setIncomeTotal(i)
        console.log(i)
    }, [data])

    const openLink = () => {
        setIsModalOpen(!isModalOpen);
    }

    const deleteIncome = async (_Id) => {
        await removeTransaction({
            variables: {
                id: _Id
            }
        });
    }

    return (
        <section className="flex-row justify-center mb-4">
            <div className="col-12 col-md-6">
                <div className="card">
                    <h4 className="card-header">Income</h4>
                    <div className="card-body">
                        <Modalincome show={isModalOpen} onClose={setIsModalOpen}></Modalincome>
                        <Button type='button' variant='success' className='subbtn' onClick={openLink}>
                            Add new Income
                        </Button>
                    </div>
                </div>
            </div>
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
                        incomeTotal.map(t => {
                            return (
                                <tr key={t._id}>
                                    <td>{t.date}</td>
                                    <td>{t.amount}</td>
                                    <td>
                                        <Button onClick={() => { deleteIncome(t._id); window.location.reload(false) }}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </section >

    );
};

export default Income; 