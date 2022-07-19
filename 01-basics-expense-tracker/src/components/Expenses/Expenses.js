import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = ({ items }) => {
   const [selectedYear, setSelectedYear] = useState('2019');

   const filterChangeHandler = (selectedYear) => {
      setSelectedYear(selectedYear);
   };

   const filteredExpenses = items.filter((item) => {
      return item.date.getFullYear().toString() === selectedYear;
   });

   return (
      <div>
         <Card className='expenses'>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
         </Card>
      </div>
   );
};

export default Expenses;
