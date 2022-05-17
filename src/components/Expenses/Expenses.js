import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const yearChangeHandler = year => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === props.year;
    });


    return (
        <Card className='expenses'>
            <ExpenseFilter selectedYear={filteredYear} onFilterYearChange={yearChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )

}

export default Expenses;