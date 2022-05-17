import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import React, {useState} from "react";

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = event => {
        props.onAddExpense(event);
        setShowForm(false);
    }

    const onFormShowHandler = () => {
        setShowForm(true)
    }

    const onFormCancelHandler = () => {
        setShowForm(false);
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={onFormShowHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onExpenseSave={saveExpenseDataHandler} onFormCancel={onFormCancelHandler}/>}
        </div>
    )

}

export default NewExpense;