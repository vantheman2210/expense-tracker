import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = function (props) { 
  const expenses = props.expenses;
  return (
    <div className="expenses">
			{expenses.map((expense) => (
				<div key={expense.id}>
					<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
				</div>
			))}
		</div>
  )
};

export default Expenses;