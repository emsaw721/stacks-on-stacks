import React from "react";
import Oink from "../components/oinktranspig.png";
import Expense from './Expense'
import BudgetPlanner from './Planner'

function MainDashboard() {
  return (
    <div>
      <section className="hero">
        <div className="banner">
          <p>
            This progress bar shows how much money you have left that you can
            spend
          </p>
        </div>
      </section>
      <div className="categories">
        <div class="topics">
          <h2>Income</h2>
          <p>Please provide your monthly income here</p>
          <span className="input-text">$</span>
          <input type="text" class="input" placeholder="Income Balance" />
        </div>
        <div className="topics">
          <h2>Transactions</h2>
          <p>
            Transactions is where you will see your real time expenses. When you
            make a payment on one of the categories from your budget planner, it
            will be logged here.
          </p>
          <input
            type="button"
            class="btn"
            value="More Information"
            onclick=""
            a
            href={Expense}
          />
        </div>
        <div className="topics">
          <h2>Stocks</h2>
          <p>For Future Development</p>
        </div>
        <div className="topics">
          <h2>Budget Planner</h2>
          <p>
            This is a way for you to seperate your income total into
            topics/catergories so that you can see how you should split your
            money up.
          </p>
          <input
            type="button"
            class="btn"
            value="More Information"
            onclick=""
            a
            href={BudgetPlanner}
          />
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
