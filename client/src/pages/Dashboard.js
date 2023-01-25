import React from "react";

function MainDashboard(){
  return (
    <section>
          <style>
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
            </style>
    <div className="categories">
      <div className="topics">
        <h2>Income</h2>
        <p>please provide your monthly income here</p>
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
        <h2>Monthly Report</h2>
        <p> this is where you will categorize your monthly income. </p>
      </div>
    </div> 
    </section>
  );
}

export default MainDashboard;
