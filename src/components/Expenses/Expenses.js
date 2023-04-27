import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

const Expenses = function (props) { 
  const expenses = props.expenses;
  return (
    <Card className="expenses">
			{expenses.map((expense) => (
				<div key={expense.id}>
					<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
				</div>
			))}
		</Card>
  )
};

export default Expenses;