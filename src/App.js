import React, { useState } from 'react';
import Expenses from '../src/components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2023, 7, 14)
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28)
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2022, 5, 12)
	},
	{
		id: 'e6',
		title: 'New Desk (Metal)',
		amount: 550,
		date: new Date(2022, 5, 17)
	}
];

function App() {
	const [ expenses, setExpenses ] = useState(INITIAL_EXPENSES);

	const addExpenseHandler = (expense) => {
		console.log('In App.js');
		console.log(expense);
		setExpenses((prevState) => { 
			return [expense, ...prevState]
		})
	};
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
