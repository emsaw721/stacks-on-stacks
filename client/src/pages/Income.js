import React, { useState, useEffect } from 'react';
import './pages.css';
import { Button } from 'react-bootstrap'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_TRANSACTIONS } from '../utils/queries';
// import { UPDATE_TRANSACTION } from '../utils/mutations';
import { format } from "date-fns"



const Income = () => {

    const { data } = useQuery(QUERY_TRANSACTIONS);

    const [incomeTotal, setIncomeTotal] = useState([])

    useEffect(() => {
        if (!data) return;
        console.log(data)
        const yearMonth = format(new Date(), "yyyyMM");
        let e = data.transactions
            .filter(t => t.firstcategory === 'Income' && t.yearmonth === yearMonth)
            .map(t => t.amount)
        setIncomeTotal(e)
        console.log(e)
    }, [data, incomeTotal])

    return (
        <section className="flex-row justify-center mb-4">
            <div className="col-12 col-md-6">
                <div className="card">
                    <h4 className="card-header">Income</h4>
                    <div className="card-body">
                        {/* {incomeTotal.forEach(i => {
                            return (<div>{i.amount}</div>)
                        })} */}
                        <Button type='submit' variant='success' className='subbtn'>
                            Update
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Income; 