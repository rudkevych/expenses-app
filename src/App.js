import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import { expensesStore } from './components/db/expensesStore';

const App = () => {
    const [expenses, setExpenses] = useState(expensesStore);

    const addExpenseHandler = newExpense => {
        setExpenses(prevExpenses => [newExpense, ...prevExpenses ]);
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
