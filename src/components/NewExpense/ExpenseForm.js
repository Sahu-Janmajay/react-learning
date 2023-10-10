import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [formData, setFormData] = useState({ title: "", amount: "", date: "" });

  const titleChangeHandler = ({ target }) => {
    setTitle(target.value);
    // setFormData({ ...formData, title: target.value });
    // setFormData((prevState) => ({ ...prevState, title: target.value }));
  };

  const amountChangeHandler = ({ target }) => {
    setAmount(target.value);
    // setFormData({ ...formData, amount: target.value });
  };

  const dateChnagehandler = ({ target }) => {
    setDate(target.value);
    // setFormData({ ...formData, date: target.value });
  };

  /* const inputChangehandler = (identifier, value) => {
    if (identifier === "title") setTitle(value);
    else if (identifier === "date") setDate(value);
    else setAmount(value);
  }; */

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { title, amount: +amount, date: new Date(date) };
    onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>New title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2023-01-01"
            max="2023-12-31"
            onChange={dateChnagehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
