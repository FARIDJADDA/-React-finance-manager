import classes from "./Date.module.css";

function Date(props) {
  const month = props.date.toLocaleString("fr-FR", { month: "long" });
  const day = props.date.toLocaleString("fr-FR", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes.expense_date}>
      <div className={classes.expense_date__month}>{month}</div>
      <div className={classes.expense_date__year}>{year}</div>
      <div className={classes.expense_date__day}>{day}</div>
    </div>
  );
}

export default Date;
