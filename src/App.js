import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NexExpense';

const App = () => {
   const exampleExpenses = [
      {
         id: 'e1',
         title: 'Toilet Paper',
         amount: 94.12,
         date: new Date(2020, 7, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
         id: 'e3',
         title: 'Car Insurance',
         amount: 294.67,
         date: new Date(2021, 2, 28),
      },
      {
         id: 'e4',
         title: 'New Wooden Desk',
         amount: 450,
         date: new Date(2021, 5, 12),
      },
   ];

   const [expenses, setExpenses] = useState(exampleExpenses);

   const addNewExpense = (expenseData) => {
      setExpenses((prevState) => {
         return [ ...prevState, expenseData ];
      });
   };

   return (
      <div>
         <NewExpense onSaveExpenseData={addNewExpense} />
         <Expenses items={expenses} />
      </div>
   );
};

export default App;
