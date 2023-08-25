import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseDate  from "./ExpenseDate";
import './ExpenseItem.css';

function ExpenseItem(props) {
    //value + function to set value
    //useState always returns these things
    const [title, setTitle] = useState(props.expense.title);

    const clickHandler = () => {
        setTitle('updated');
        console.log(title)
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;