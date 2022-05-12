import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
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