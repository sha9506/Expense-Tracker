import React from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

 const Expenses=(props) =>
 {
    return ( <div className="expenses">
         <ExpenseItem 
              date={props.item[0].date}
              title={props.item[0].title} 
              amount={props.item[0].amount}/>
=            <ExpenseItem 
              date={props.item[1].date}
              title={props.item[1].title} 
              amount={props.item[1].amount}/>
            <ExpenseItem 
              date={props.item[2].date}
              title={props.item[2].title} 
              amount={props.item[2].amount}/>
    
    </div>

    )
 }

 export default Expenses;