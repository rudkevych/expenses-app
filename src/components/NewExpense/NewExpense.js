import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import React from "react";

const NewExpense = (props) => {

    const saveExpenseDataHandler = event => {
        props.onAddExpense(event);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onExpenseSave={saveExpenseDataHandler}/>
        </div>
    )

}

export default NewExpense;