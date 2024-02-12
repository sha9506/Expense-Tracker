import React from 'react'

import './ExpenseItem.css' ;

function ExpenseItem(props) 
{
    const month=props.date.getMonth();
    const year=props.date.getFullYear();
    const day=props.date.getDay();


    return ( <div className="outer-div">
    <div className="main-box">
       <div className="head-bar">
        <div className="head-title">Expense Tracker</div>
        </div>
        <div className="expense-list">
            <div className='expense-item'>
                <div className='circle'></div>
                <div className='title'>
                    <div>{props.title}</div>
                    <div>
                        <div>{ month }</div>
                        <div>{ year }</div>
                        <div>{ day }</div>
                    </div>
                </div>
                <div className='expense-item-price'>{props.amount}$</div>
            </div>
       
        </div>
    </div>
 </div>
    );
}

export default ExpenseItem;