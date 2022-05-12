import './ExpenseDate.css';

const ExpenseDate = (props) => {
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>March</div>
            <div className='expense-date__year'>2019</div>
            <div className='expense-date__day'>12</div>
        </div>
    )
}

export default ExpenseDate;

