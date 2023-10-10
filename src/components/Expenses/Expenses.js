import { useState } from "react";

import { Card } from "../UI";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState(2023);

  const filterChnageHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChnageHandler}
          selected={selectedYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} year={selectedYear} />
      </Card>
    </li>
  );
};

export default Expenses;
