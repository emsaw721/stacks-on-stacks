import { useMutation } from "@apollo/client";
import React from "react";

function Income() {
    
    const [addIncome] = useMutation(ADD_INCOME);

    return(
        <section>
        <div></div>
        </section>
    )
}

export default Income