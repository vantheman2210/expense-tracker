import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
	if (props.expenses.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.expenses.map((expense) => (
				<div key={expense.id}>
					<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
				</div>
			))}
		</ul>
	);
};

export default ExpensesList;
