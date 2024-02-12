import React from 'react'

import './Expense_item.css' ;

function Expense_item(props) 
{
    const month=props.date.toLocaleString('en-US', {month: 'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-US', {day: '2-digits'});;


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

export default Expense_item;