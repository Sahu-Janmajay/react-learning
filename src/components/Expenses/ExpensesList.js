import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = ({ items, year }) => {
  if (items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No Expenses Found for {year}.</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {items.map((exp) => {
        return <ExpenseItem key={exp.id} expense={exp} />;
      })}
    </ul>
  );
};

export default ExpensesList;
