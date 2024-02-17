import React from 'react';
import './ExpenseDate.css' ;

const ExpenseDate =(props) =>
{
    
    const month=props.date.getMonth();
    const year=props.date.getFullYear();
    const day=props.date.getDay();

    return (
        <div>{ day }-{ month }-{ year }</div>
    )

}

export default ExpenseDate;