import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
import React from "react";

const ExpensesList = props => {
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === props.year;
    });

    let expenseContent = <p>No expenses found.</p>

    if (filteredExpenses.length) {
        expenseContent = filteredExpenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)
    }

    return expenseContent;
}

export default ExpensesList;