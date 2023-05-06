import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  const saveExpenseData = (userInput) => {
    const userInputForm = {
      ...userInput,
      id: Math.random().toString(),
    };
    console.log(userInputForm);
    props.onAddExpense(userInputForm);
  };

  const addExpenseHandler = () => {
    !addExpense ? setAddExpense(true) : setAddExpense(false);
  };

  if (!addExpense) {
    return (
      <div className="new-expense">
        <button onClick={addExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseData}
        onCancel={addExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
