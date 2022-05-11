import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div>
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
            />
        </div>
    )

}

export default Expenses;