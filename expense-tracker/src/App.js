import React from 'react'
import Expense_item from './components/Expense_item';

function App()
{

  let expenseDate= new Date(2024, 3, 9);
  let expenseTitle= 'school fee';
  let expenseAmount= 500;

  return( <div>
           Enter your expenses
           <Expense_item 
              date={expenseDate}
              title={expenseTitle} 
              amount={expenseAmount}>
            </Expense_item>
        </div>
         

        );
  }



export default App;
