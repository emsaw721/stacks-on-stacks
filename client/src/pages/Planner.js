import React, { useState, useEffect} from 'react';
import Cal from '../components/Calendar'
import './pages.css';
import { useQuery} from "@apollo/client";
import {QUERY_TRANSACTIONS} from "../utils/queries";
import { format } from "date-fns"


const Planner = () => {
const [expenseList, setExpenseList] = useState([])
const { data } = useQuery(QUERY_TRANSACTIONS);
useEffect(() => {
    if (!data) return;
    console.log(data);
    const yearMonth = format(new Date(), "yyyyMM");
    let e = data.transactions
    .filter(t => t.firstcategory === 'Expense' && t.yearmonth === yearMonth)        
setExpenseList(e)
console.log(e)
}, [data])



const [rent, setRent] = useState('');
const saveRent = () => {
    localStorage.setItem('rent', rent); 
    alert(rent)
}
const changeRent = (event) => {
    setRent(event.target.value); 
}
const [util, setUtil] = useState('');
const saveUtil = () => {
    localStorage.setItem('util', util)
    alert(util)
}
const changeUtil = (event) => {
    setUtil(event.target.value); 
}

const [grocery, setGrocery] = useState('');
const saveGrocery = () => {
    localStorage.setItem('grocery', grocery); 
    alert(grocery)
}
const changeGrocery = (event) => {
    setGrocery(event.target.value); 
}

const [other, setOther] = useState('');
const saveOther = () => {
    localStorage.setItem('other', other)
    alert(other)
}
const changeOther = (event) => {
    setOther(event.target.value); 
}

const savedRent = localStorage.getItem('rent');
const savedUtility = localStorage.getItem('util'); 
const savedGrocery = localStorage.getItem('grocery');
const savedOther = localStorage.getItem('other'); 

let arr = [savedRent, savedUtility, savedGrocery, savedOther]; 
console.log(arr); 

let sum = arr.reduce(function(prev, current) {
    return prev + +current
  }, 0);
  console.log(sum) 


    return (
        <section className='report'>
            <style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>
            <h1> Your Progress Report </h1>
            <Cal/>
            <div>
               <div className='reportcontainer'>
                <div className='planner-table'>
                    <div className='cats'>
                        <h2>Category</h2>
                        <div>
                            <h3 className='renthead'>Housing</h3>
                        </div>
                        <div>
                            <h3 className='utilhead'>Utility</h3>
                        </div>
                        <div>
                            <h3 className='grochead'>Food</h3>
                        </div>
                        <div>
                            <h3 className='othhead'>Transportation</h3>
                        </div>
                        <div>
                            <h3 className='tothead'>Insurance</h3>
                        </div>
                        <div>
                            <h3 className='renthead'>Education</h3>
                        </div>
                        <div>
                            <h3 className='utilhead'>Healthcare</h3>
                        </div>
                        <div>
                            <h3 className='grochead'>Savings & Investment</h3>
                        </div>
                        <div>
                            <h3 className='othhead'>Personal Spending</h3>
                        </div>
                        <div>
                            <h3 className='tothead'>Others</h3>
                        </div>
                    </div>
                    <div className='projection'>
                        <h2>Expected</h2>
                        <div className='expected'>
                            <input onChange={changeRent} value={rent} placeholder={savedRent} />
                            <button onClick={saveRent}>Save</button>
                        </div>
                        <div className='expected'>
                            <input onChange={changeUtil} value={util} placeholder={savedUtility} />
                            <button onClick={saveUtil}>Save</button>
                        </div>
                        <div className='expected'>
                            <input onChange={changeGrocery} value={grocery} placeholder={savedGrocery} />
                            <button onClick={saveGrocery}>Save</button>
                        </div>
                        <div className='expected'>
                            <input onChange={changeOther} value={other} placeholder={savedOther} />
                            <button onClick={saveOther}>Save</button>
                        </div>
                    
                        <div className='expected'>
                            <input onChange={changeRent} value={rent} placeholder={savedRent} />
                            <button onClick={saveRent}>Save</button>
                        </div>
                        <div className='expected'>
                            <input onChange={changeUtil} value={util} placeholder={savedUtility} />
                            <button onClick={saveUtil}>Save</button>
                        </div>
                        <div className='expected'>
                            <input onChange={changeGrocery} value={grocery} placeholder={savedGrocery} />
                            <button onClick={saveGrocery}>Save</button>
                        </div>
                        <div className='expected'>
                            <input onChange={changeOther} value={other} placeholder={savedOther} />
                            <button onClick={saveOther}>Save</button>
                        </div>
                        <div className='expectedtot'>{sum}</div>
                    </div>
                    <div className='reality'>
                        <h2>Actual</h2>
                        {
                        expenseList.map(t => {
                            return (
                                <div key={t._id}>
                                <div>
                            <h3>{t.secondcategory}</h3>
                            <li>{t.amount}</li>
                        </div>         
                                </div>
                            )
                        })
                        }
                    
                    </div>
                </div>  
                </div>
            </div>
        </section>
    )
}


export default Planner;
