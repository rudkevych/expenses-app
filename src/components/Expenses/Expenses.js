import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, {useState} from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const yearChangeHandler = year => {
        setFilteredYear(year);
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter selectedYear={filteredYear} onFilterYearChange={yearChangeHandler}/>
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
            />
        </Card>
    )

}

export default Expenses;