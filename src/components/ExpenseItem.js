import './ExpenseItem.css';

const ExpenseItem = function() {
	const expenseDate = new Date(2023, 2, 28);
	const expenseTitle = 'Car Insurance';
	const expenseAmount = 259.99;
	return (
		<div className="expense-item">
			<div>{expenseDate.toISOString()}</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">${expenseAmount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
