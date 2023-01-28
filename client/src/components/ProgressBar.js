import React, {useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import {useQuery} from "@apollo/client";
import {QUERY_TRANSACTIONS} from "../utils/queries";
import {format} from "date-fns"

const Bar = () => {
    const [expenseTotal, setExpense] = React.useState(80);
    const {data} = useQuery(QUERY_TRANSACTIONS);

    useEffect(() => {
        if (!data) return;
        const yearMonth = format(new Date(), "yyyyMM");
        let b = data.transactions
            .filter(t => t.firstcategory === 'Income' && t.yearmonth === yearMonth)
            .map(t => t.amount)
            .reduce((a, b) => a + b, 0);
        let e = data.transactions
            .filter(t => t.firstcategory === 'Expense' && t.yearmonth === yearMonth)
            .map(t => t.amount)
            .reduce((a, b) => a + b, 0);
        let expenseTotal = Math.trunc((e*100)/b);
        setExpense(expenseTotal);
        console.log(expenseTotal)
    }, [data, expenseTotal])

    return (
        <ProgressBar completed={expenseTotal} maxCompleted={100} barContainerclassName="progressBar" bgColor='#011936' baseBgColor='#9FCC2E'/>
    )
};

export default Bar;