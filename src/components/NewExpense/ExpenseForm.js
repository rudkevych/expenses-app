import styles from './ExpenseForm.module.css';
import React, {useState} from "react";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const submitHandler = event => {
        event.preventDefault();

        const expense = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onExpenseSave(expense);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    }

    const formCancelHandler = () => {
        props.onFormCancel();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles['new-expense__controls']}>
                <div className={styles['new-expense__control']}>
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className={styles['new-expense__control']}>
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className={styles['new-expense__control']}>
                    <label>Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className={styles['new-expense__actions']}>
                <button onClick={formCancelHandler}>Cancel</button>
                <button type='submit'>Add</button>
            </div>
        </form>
    )


}

export default ExpenseForm;