import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
    const expensesStore = [
        {
            title: 'Book',
            amount: 45.23,
            date: new Date(2020, 3, 5)
        },
        {
            title: 'Bed',
            amount: 250.40,
            date: new Date(2020, 7, 2)
        },
        {
            title: 'Perfume',
            amount: 80.3,
            date: new Date(2020, 5, 12)
        },
        {
            title: 'Mcdonalds',
            amount: 8,
            date: new Date(2020, 3, 26)
        }
    ];
    const [expenses, setExpenses] = useState(expensesStore);


    const addExpenseHandler = expense => {
        console.log(expense);
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
