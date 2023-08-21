import './ExpenseItem.css';

function ExpenseItem(props) {
    const date = props.expense.date;
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const year = date.getFullYear();
    const day = date.toLocaleString('en-GB', { day: '2-digit' });

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;