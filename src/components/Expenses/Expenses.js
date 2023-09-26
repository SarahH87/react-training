import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';
import {useState} from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
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
                <ExpensesFilter selectedYear={enteredYear} onChangeFilter={onChangeFilter} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;