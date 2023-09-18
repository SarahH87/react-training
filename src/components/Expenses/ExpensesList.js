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
                {props.expenses.map(expense => <ExpenseItem expense={expense} />)}
            </Card>
        </div>
    );
}

export default ExpensesList;