import React from "react";

function MainDashboard(){
  return (
    <section>
        <div className="hero"></div>
   
    <div className="categories">
      <div className="topics">
        <h2>Income</h2>
        <p>please provide yout monthly income here</p>
        <span className="input-text">$</span>
        <input type="text"  className="input" placeholder="Income balance"/>
        
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
    </section>
  );
}

export default MainDashboard;
