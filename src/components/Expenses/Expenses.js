import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = function(props) {
	const [ expenses, setExpenses ] = useState(props.expenses);
	const [ filterYear, setFilterYear ] = useState('2021');

	const filterYearSelected = (year) => {
		console.log(year);
		setFilterYear(year);
		setExpenses(props.expenses.filter((expense) => expense.date.getFullYear() === Number(year)));
	};

	let expensesContent = <p>No expenses found.</p>;

	if (expenses.length > 0) {
		
		expensesContent = expenses.map((expense) => (
			<div key={expense.id}>
				<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
			</div>
		));
	}
	return (
		<div>
			<ExpensesFilter selected={filterYear} filterExpenses={props.expenses} getFilterYear={filterYearSelected} />
			<Card className="expenses">{expensesContent}</Card>
		</div>
	);
};

export default Expenses;
