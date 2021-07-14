import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
    const [year, setYear] = useState('2021');

    // const expenses = props.item;
    // const имя переменной = смысл переменной

    const addFilter = (year) => {
        // console.log('filter_expenses', year);
        setYear(year);
    };

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    

    return (

        <Card className='expenses'>
            <ExpensesFilter selected={year} onAddFilter={addFilter} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList item={filteredExpenses}/>

            {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 && 
               filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
            } */}

            {/* <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            /> */}
        </Card>


    );
};

export default Expenses;
