import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

function ExpensesList(props) {
    const [ enteredYear, setEnteredYear ] = useState('2020');

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === enteredYear;
    });

    const onChangeFilter = year => {
        setEnteredYear(year);
    };

    return (
        <div>
            <Card className="expenses">
                {console.log('items' + props)}
                <ExpensesFilter selectedYear={enteredYear} onChangeFilter={onChangeFilter} />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    );
}

export default ExpensesList;