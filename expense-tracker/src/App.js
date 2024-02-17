import React from 'react'
import Expenses from './components/Expenses';

function App(props)
{
  let expenses = [
    {
      id: 'e1',
      title: 'school fee',
      amount: 5000,
      date: new Date(2024, 5 ,12)
    },
    {
      id: 'e2',
      title: 'college fee',
      amount: 5700,
      date: new Date(2024, 15 ,12)
    },
    {
      id: 'e3',
      title: 'shopping',
      amount: 10000,
      date: new Date(2024, 20 ,12)
    }
  ];

  return( <div>
           Enter your expenses
           <Expenses item={expenses} />
        </div>
        );
  }




export default App;
