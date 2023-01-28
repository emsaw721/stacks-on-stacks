import React, { useState, useEffect} from 'react';
import {useQuery} from '@apollo/client'; 
import {QUERY_TRANSACTIONS} from "../utils/queries";
import Cal from '../components/Calendar'
import './pages.css';


const Planner = () => {

    // const {data} = useQuery(QUERY_TRANSACTIONS); 
    // console.log(data); 
    // const dataArr = data?.transactions; 
    // console.log(dataArr); 



    // const dataRentObj = dataArr.filter(obj  => obj.secondcategory === 'Housing'); 
    // const rentArr = dataRentObj.map((rents) => {
    //     return rentAmount = rents.amount
    //     console.log(rentAmount); 
    // });

//     const dataUtilObj = dataArr.filter(obj  => {return obj.secondcategory === 'Utility'}); 
//     const utilArr = dataUtilObj.map((utils) => {
//         rent utilAmount = utils.amount; 
//     });

//     const dataGrocObj = dataArr.filter(obj  => {return obj.secondcategory === 'Food'}); 
//     const grocArr = dataGrocObj.map((grocs) => {
//         console.log(grocs.amount); 
//         setGrocAmount(grocs.amount); 
//     });

//     const dataOthObj = dataArr.filter(obj  => {return obj.secondcategory === 'Others'}); 
//     const othArr = dataOthObj.map((others) => {
//         console.log(others.amount); 
//         setOthAmount(others.amount); 
//     });


// let rentAmount = rentArr.rents.amount; 
// let utilAmount = ''
//  let grocAmount = ''
//  let othAmount = ''

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
                            <h3 className='renthead'>Rent</h3>
                        </div>
                        <div>
                            <h3 className='utilhead'>Utilities</h3>
                        </div>
                        <div>
                            <h3 className='grochead'>Grocery</h3>
                        </div>
                        <div>
                            <h3 className='othhead'>Other</h3>
                        </div>
                        <div>
                            <h3 className='tothead'>Total</h3>
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
                        <div className='expectedtot'>{sum}</div>
                    </div>
                    <div className='reality'>
                        <h2>Actual</h2>
                        <div className='actual'>
                        <div className='rentact'>{savedRent}</div>
                        <div className='utilact'>{savedUtility}</div>
                        <div className='grocact'>{savedGrocery}</div>
                        <div className='othact'>{savedOther}</div>
                        <div className='totact'>{sum}</div>
                    </div>
                    </div>
                </div>  
                </div>
            </div>
        </section>
    )
}


export default Planner;
