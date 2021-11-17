import Card from "../layout/Card";
import Date from "./date/Date";
import styles from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  return (
    <Card className={styles.expense_item}>
      <Date date={props.date}/>
      <div className={styles.expense_item__description}>
        <h2>{props.title}</h2>
        <div className={styles.expense_item__price}>{props.amount}Є</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
