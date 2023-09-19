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
                {console.log('items' + props)}
                <ExpensesFilter selectedYear={enteredYear} onChangeFilter={onChangeFilter} />
                {props.items.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>
                )}
            </Card>
        </div>
    );
}

export default ExpensesList;