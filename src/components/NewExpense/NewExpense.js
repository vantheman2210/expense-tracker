import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseData = (userInput) => {
		const userInputForm = {
			...userInput,
			id: Math.random().toString()
		};
		console.log(userInputForm);
		props.onAddExpense(userInputForm);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseData} />
		</div>
	);
};

export default NewExpense;
