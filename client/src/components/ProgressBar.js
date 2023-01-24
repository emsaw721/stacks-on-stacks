import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Bar = () => {
    const expenseTotal = 80
    const budget = 100
    return (
        <ProgressBar completed={expenseTotal} width={200} maxCompleted={budget} className="progressBar" bgColor='#EC4F46'/>
    )
};

export default Bar;