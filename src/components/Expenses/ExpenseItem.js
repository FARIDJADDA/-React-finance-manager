import { useState } from "react";
import Card from "../UI/Card";
import Date from "./date/Date";
import styles from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  const [changeTitle, setChangeTitle] = useState(props.title);

  const clickHandler = () => {
    setChangeTitle('change');
  };

  return (
    <Card className={styles.expense_item}>
      <Date date={props.date} />
      <div className={styles.expense_item__description}>
        <h2>{changeTitle}</h2>
        <div className={styles.expense_item__price}>{props.amount}Є</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
