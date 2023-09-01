import React from 'react'
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
const Expenseitem = (props) => {
  const price = 9999;
  const expenseDate = date;
  const expenseTitle = title;
  const expensePrice = propsPrice;
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(expensePrice);

  const make2digit = (text) =>{
    return text.toString().padStart(2, '0');
  };

  const makeFormattedDate = () =>{
    const year = expenseDate.getFullYear();
    const month = expenseDate.getMonth();
    const date = expenseDate.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(date)}일`;
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