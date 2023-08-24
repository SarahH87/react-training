import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

function ExpensesList(props) {

    return (
        <Card className="expenses">
            <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[2]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[3]}></ExpenseItem>
        </Card>
    );
}

export default ExpensesList;