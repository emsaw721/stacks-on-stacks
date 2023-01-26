import React, { useState, useEffect} from 'react';
import Cal from '../components/Calendar'
import './pages.css';


const Planner = () => {

const [rent, setRent] = useState('');
const saveRent = () => {
    alert(rent)
}
const changeRent = (event) => {
    setRent(event.target.value); 
}
const [util, setUtil] = useState('');
const saveUtil = () => {
    alert(util)
}
const changeUtil = (event) => {
    setUtil(event.target.value); 
}

const [grocery, setGrocery] = useState('');
const saveGrocery = () => {
    alert(grocery)
}
const changeGrocery = (event) => {
    setGrocery(event.target.value); 
}

const [other, setOther] = useState('');
const saveOther = () => {
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
                <div className='table'>
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
                            <input onChange={changeRent} value={rent} />
                            <button onClick={saveRent}>Save</button>
                        </div>
                        <div className='expected'>
                            <input onChange={changeUtil} value={util} />
                            <button onClick={saveUtil}>Save</button>
                        </div>
                        <div className='expected'>
                            <input onChange={changeGrocery} value={grocery} />
                            <button onClick={saveGrocery}>Save</button>
                        </div>
                        <div className='expected'>
                            <input onChange={changeOther} value={other} />
                            <button onClick={saveOther}>Save</button>
                        </div>
                        <div className='expectedtot'>{sum}</div>
                    </div>
                    <div className='reality'>
                        <h2>Actual</h2>
                        <div className='actual'>
                        <div className='rentact'>{rent}</div>
                        <div className='utilact'>{util}</div>
                        <div className='grocact'>{grocery}</div>
                        <div className='othact'>{other - 450}</div>
                        <div className='totact'>{sum-450}</div>
                        </div>
                    </div>
                </div>  
                </div>
            </div>
        </section>
    )
}


export default Planner;
