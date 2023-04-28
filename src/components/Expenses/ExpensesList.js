import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => { 
  let expensesContent = <p>No expenses found.</p>;

	if (props.expenses.length > 0) {
		
		expensesContent = props.expenses.map((expense) => (
			<div key={expense.id}>
				<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
			</div>
		));
	}
};

export default ExpensesList;