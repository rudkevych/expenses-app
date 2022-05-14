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
            {props.expenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                />)}
        </Card>
    )

}

export default Expenses;