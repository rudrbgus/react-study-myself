import React from 'react'
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
const Expenseitem = ({title, price, date}) => {    
  const expenseTitle = title;
  const expensePrice = price;
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(expensePrice);

  const make2digit = (text) =>{
    return text.toString().padStart(2, '0');
  };
  


  return (    
    <div className='expense-item'>
        <ExpenseDate date={date}/>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>{formattedPrice}원</div>
        </div>
    </div>
  );
}

export default Expenseitem