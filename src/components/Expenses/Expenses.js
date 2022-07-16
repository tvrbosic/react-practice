import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ items }) => {
   const [selectedYear, setSelectedYear] = useState('2019');

   const filterChangeHandler = (selectedYear) => {
      setSelectedYear(selectedYear);
   };

   return (
      <div>
         <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler} />
            {items.map((item) => (
               <ExpenseItem
                  key={item.id}
                  date={item.date}
                  title={item.title}
                  amount={item.amount}
               />
            ))}
         </Card>
      </div>
   );
};

export default Expenses;
