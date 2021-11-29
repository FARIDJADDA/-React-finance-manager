import { useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

import classes from "./Expenses.module.css";
import ExpensesList from "./ExpensesList/ExpensesList";

function Expenses(props) {
  const [optionYear, setOptionYear] = useState("2021");

  const saveFIlterDataHandler = (selectYear) => {
    setOptionYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === optionYear;
  });

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        selected={optionYear}
        onSaveFIlterData={saveFIlterDataHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
