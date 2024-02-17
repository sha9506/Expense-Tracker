import React, {useState} from 'react'

import './ExpenseItem.css' ;
import ExpenseDate from './ExpenseDate';

 const ExpenseItem=(props) =>
{
    const[newTitle , setNewTitle]= useState("");
    const[title , setTitle]= useState(props.title);

    const clickHandler = () =>
    {
        setTitle(newTitle);
    }
    const changeHandler=(event)=>
    {
        setNewTitle(event.target.value);
    }

    return ( <div>
    <div className="outer-div">
        <div className="main-box">
            <div className="expense-list">
                <div className='expense-item'>
                    <div className='circle'></div>
                    <div className='title'>
                         <div>{title}</div>
                        <ExpenseDate date={props.date} />
                    </div>
                    <div className='expense-item-price'>{props.amount}$</div>
                </div>
                <input type='text' value={newTitle} onChange={changeHandler}/>
                <button onClick={clickHandler}>Change title</button>
            </div>
        </div>
    </div>
    </div>
   
    );
}

export default ExpenseItem;