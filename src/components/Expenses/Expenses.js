import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ items }) => {
   return (
      <Card className='expenses'>
         {items.map((item) => (
            <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />
         ))}
      </Card>
   );
};

export default Expenses;
