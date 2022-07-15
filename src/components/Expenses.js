import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = ({items}) => {


   return (
      <div className='expenses'>
         {items.map((item) => (
            <ExpenseItem
               key={item.id}
               date={item.date}
               title={item.title}
               amount={item.amount}></ExpenseItem>
         ))}
      </div>
   );
};

export default Expenses;
