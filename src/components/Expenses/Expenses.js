import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';

const Expenses = function(props) {
	const [ expenses, setExpenses ] = useState(props.expenses);
	const [ filterYear, setFilterYear ] = useState('2021');

	const filterYearSelected = (year) => {
		setFilterYear(year);
		setExpenses(props.expenses.filter((expense) => expense.date.getFullYear() === Number(year)));
	};

	return (
		<div>
			<Card>
				<ExpensesFilter
					selected={filterYear}
					filterExpenses={props.expenses}
					getFilterYear={filterYearSelected}
				/>
				<ExpensesList expenses={expenses} />
			</Card>
		</div>
	);
};

export default Expenses;
