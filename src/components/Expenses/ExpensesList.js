import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

function ExpensesList(props) {
    const [ enteredYear, setEnteredYear ] = useState('2020');

    const onChangeFilter = year => {
        console.log('in expenses list');
        console.log(year);
        setEnteredYear(year);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={enteredYear} onChangeFilter={onChangeFilter} />
                <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
                <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
                <ExpenseItem expense={props.expenses[2]}></ExpenseItem>
                <ExpenseItem expense={props.expenses[3]}></ExpenseItem>
            </Card>
        </div>
    );
}

export default ExpensesList;