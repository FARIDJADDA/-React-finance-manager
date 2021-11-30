import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

import classes from "./Expenses.module.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpenseChart/ExpensesChart";

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
