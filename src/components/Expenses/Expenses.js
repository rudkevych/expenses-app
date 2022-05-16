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



    return (
        <Card className='expenses'>
            <ExpenseFilter selectedYear={filteredYear} onFilterYearChange={yearChangeHandler}/>
            <ExpensesList items={props.expenses} year={filteredYear}/>
        </Card>
    )

}

export default Expenses;