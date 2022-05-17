import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
import React from "react";

const ExpensesList = props => {
    if (!props.items.length) {
        return <h2>No expenses found.</h2>
    }

    return (<ul className='expense-list'>
        {props.items.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>)
}

export default ExpensesList;