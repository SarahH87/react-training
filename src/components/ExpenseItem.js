import Card from "./Card";
import ExpenseDate  from "./ExpenseDate";
import './ExpenseItem.css';

function ExpenseItem(props) {
    console.log(props.expense.date);
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;