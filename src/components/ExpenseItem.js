import './ExpenseItem.css';

const ExpenseItem = function(props) {
	const expenseDate = new Date(2023, 2, 28);
	const expenseTitle = 'Car Insurance';
	const expenseAmount = 259.99;
	return (
		<div className="expense-item">
			<div>{props.date.toISOString()}</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
