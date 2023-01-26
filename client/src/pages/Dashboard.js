import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import Modalincome from "../components/Modalincome";
import { Link } from 'react-router-dom';


function MainDashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <div className="hero"></div>

      <div className="categories">
        <div className="topics">
          <h2>Income</h2>
          <p>please provide yout monthly income here</p>
          {/* <span className="input-text">$</span> */}
          {/* <input type="text"  className="input" placeholder="Income balance"/> */}

          <Button type="button" onClick={() => setIsModalOpen(true)}>Add Income</Button>
          <Button type="button">
            <Link to='/income' className='nav-link'>
              <span className='link-text'>Edit Income</span>
            </Link>
          </Button>
        </div>
        <div className="topics">
          <h2>Expense</h2>
          <p>add your real time transactions here</p>
        </div>
        <div className="topics">
          <h2>Stocks</h2>
        </div>
        <div className="topics">
          <h2>Topic Outline</h2>
          <p> this is where you will categorize your monthly income. </p>
        </div>
      </div>
      <Modalincome show={isModalOpen} onClose={setIsModalOpen}></Modalincome>

    </section>
  );
}

export default MainDashboard;
