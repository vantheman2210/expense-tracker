import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	// const [enteredTitle, setEnteredTitle] = useState('');
	// const [enteredAmount, setEnteredAmount] = useState('')
	// const [enteredDate, setEnteredDate] = useState('')

	const [ userInput, setUserInput ] = useState({
		title: '',
		amount: '',
		date: ''
	});

	const titleChangeHandler = (e) => {
		console.log(e.target.value);
		// setuserInput({
		//   ...userInput,
		//   title: e.target.value
		// });
		// Use this bellow when depending on previous state
		setUserInput((prevState) => {
			return { ...prevState, title: e.target.value };
		});
	};

	const amountChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, amount: e.target.value };
		});
	};

	const dateChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, date: new Date(e.target.value) };
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		props.onSaveExpenseData(userInput);

		setUserInput({
			title: '',
			amount: '',
			date: ''
		});
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={userInput.title} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={userInput.amount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" value={userInput.date} onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
