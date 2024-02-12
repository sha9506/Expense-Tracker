import React from 'react'
import ExpenseItem from './components/ExpenseItem';

function App()
{

  let expenseDate= new Date(2024, 3, 9);
  let expenseTitle= 'school fee';
  let expenseAmount= 500;

  return( <div>
           Enter your expenses
           <ExpenseItem 
              date={expenseDate}
              title={expenseTitle} 
              amount={expenseAmount}>
            </ExpenseItem>
        </div>
        );
  }



export default App;
