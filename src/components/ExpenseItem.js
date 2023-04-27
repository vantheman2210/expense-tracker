import './ExpenseItem.css';

const ExpenseItem = function(props) {
	// Constant variables 
	
	
	
	return (
		<div className="expense-item">
			<div>
			<div>{month}</div>
			<div>{year}</div>
			<div>{day}</div>
			</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
