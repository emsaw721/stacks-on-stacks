function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.secondCategory}</td>
                            <td>{data.amount}</td>
                            <td>{data.categoryNote}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;