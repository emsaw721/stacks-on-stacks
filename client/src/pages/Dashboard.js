import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import Modalincome from "../components/Modalincome";



function MainDashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <div className="hero"></div>

      <div className="categories">
        <div className="topics">
          <h2>Income</h2>
          <p>This page is to view your monthly income!</p>       

          <Button className='dashbtn' type="button" onClick={() => setIsModalOpen(true)}>Add Income</Button>          
        </div>
        <div className="topics">
          <h2>Expense</h2>
          <p>This page is to list your expenses for the month!</p>
        </div>
        <div className="stock">
          <h2>Stocks</h2>
        </div>
        <div className="topics">
          <h2>Progress Report</h2>
          <p>This is your monthly "report card"! But in a fun way!</p>
        </div>
      </div>
      <Modalincome show={isModalOpen} onClose={setIsModalOpen}></Modalincome>

    </section>
  );
}

export default MainDashboard;
