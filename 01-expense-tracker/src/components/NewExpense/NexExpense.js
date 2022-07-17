import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
   const [displayForm, setDisplayForm] = useState(false);

   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      props.onSaveExpenseData(expenseData);
   };

   return (
      <div className='new-expense'>
         {!displayForm && (
            <button onClick={() => setDisplayForm(!displayForm)}>Add new expense</button>
         )}
         {displayForm && (
            <ExpenseForm
               onSaveExpenseData={saveExpenseDataHandler}
               hideForm={() => setDisplayForm(false)}
            />
         )}
      </div>
   );
};

export default NewExpense;
