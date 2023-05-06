import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = function(props) {
	const [ expenses, setExpenses ] = useState(props.expenses);
	const [ filterYear, setFilterYear ] = useState('2021');

	const filterYearSelected = (year) => {
		setFilterYear(year);
		setExpenses(props.expenses.filter((expense) => expense.date.getFullYear() === Number(year)));
		console.log(expenses)
	};

	return (
		<div>
			<Card>
				<ExpensesFilter
					selected={filterYear}
					filterExpenses={props.expenses}
					getFilterYear={filterYearSelected}
				/>
				<ExpensesChart expenses={expenses} />
				<ExpensesList expenses={expenses} />
			</Card>
		</div>
	);
};

export default Expenses;
