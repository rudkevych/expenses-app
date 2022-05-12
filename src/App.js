import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
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
    return (
        <div className="App">
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
