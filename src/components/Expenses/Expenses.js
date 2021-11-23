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

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        selected={optionYear}
        onSaveFIlterData={saveFIlterDataHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
