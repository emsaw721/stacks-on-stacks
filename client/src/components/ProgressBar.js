import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Bar = () => {
    const expenseTotal = 80
    const budget = 100
    return (
        <ProgressBar completed={expenseTotal} maxCompleted={budget} barContainerclassName="progressBar" bgColor='#011936' baseBgColor='#9FCC2E'/>
    )
};

export default Bar;