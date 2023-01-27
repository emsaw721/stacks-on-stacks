import React, { useState } from 'react'
//import Modalincome from "../components/Modalincome";
import { Link } from 'react-router-dom';


function MainDashboard() {


  return (
    <section>
      <div className="hero"></div>

      <div className="categories">
        <div className="topics">
          <h2>Income</h2>
          <p>Add and View Your Income Here!</p>
          {/* <span className="input-text">$</span> */}
          {/* <input type="text"  className="input" placeholder="Income balance"/> */}

          <Link to="/Income">← Add and View Your Income!</Link>          
        </div>
        <div className="topics">
          <h2>Expense</h2>
          <p>This page is to list your expenses for the month!</p>
          <Link to="/Expense">← Add and View Your Expenses!</Link>
        </div>
        <div className="stock">
          <h2>Stocks</h2>
        </div>
        <div className="topics">
          <h2>Planner</h2>
          <p>This is your monthly "report card"! But in a fun way!</p>
          <Link to="/Planner">← View Your Planner!</Link>
        </div>
      </div>
      

    </section>
  );
}

export default MainDashboard;
