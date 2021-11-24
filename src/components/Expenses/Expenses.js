import { useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

import classes from "./Expenses.module.css";

function Expenses(props) {
  const [optionYear, setOptionYear] = useState("2021");

  const saveFIlterDataHandler = (selectYear) => {
    setOptionYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === optionYear;
  });

  let noExpensesContent = <p>0 dépenses</p>;

  if (filteredExpenses.length > 0) {
    noExpensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        selected={optionYear}
        onSaveFIlterData={saveFIlterDataHandler}
      />
      {noExpensesContent}
    </Card>
  );
}

export default Expenses;
