import ExpenseForm from "./ExpenseForm/ExpenseForm";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseDta) => {
    const expenseData = {
      ...enteredExpenseDta,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className={classes.new_expense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
