import { useState } from "react";

import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [openAddNewExpenseForm, setOpenAddNewExpenseForm] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setOpenAddNewExpenseForm(true);
  };

  const hideNewExpenseHandler = () => {
    setOpenAddNewExpenseForm(true);
  };

  const openAddNewExpenseHandler = () => {
    setOpenAddNewExpenseForm(false);
  };

  if (openAddNewExpenseForm) {
    return <button onClick={openAddNewExpenseHandler}>Add New Expense</button>;
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.new_expense__controls}>
        <div className={classes.new_expense__control}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.new_expense__control}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes.new_expense__control}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={classes.new_expense_actions}>
        <button type="button" onClick={hideNewExpenseHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
