import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function ExpensesList(props) {
    console.log(props);

    return (
        <div className="expenses">
            <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[2]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[3]}></ExpenseItem>
        </div>
    );
}

export default ExpensesList;