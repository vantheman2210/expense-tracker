import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = function(props) {
	const expenses = props.expenses;
	const [filterYear, setFilterYear] = useState('2021');

	const filterYearSelected = (year) => {
		console.log(year);
		setFilterYear(year);
	};
	return (
		<div>
			<ExpensesFilter selected={filterYear} getFilterYear={filterYearSelected} />
			<Card className="expenses">
				{expenses.map((expense) => (
					<div key={expense.id}>
						<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
					</div>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
