import styles from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  
  return (
    <div className={styles.expense_item}>
      <div>{props.date.toISOString()}</div>
      <div className={styles.expense_item__description}>
        <h2>{props.title}</h2>
        <div className={styles.expense_item__price}>{props.amount}Є</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
