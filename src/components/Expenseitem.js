import React, { useState } from 'react'
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

const Expenseitem = ({title, price, date}) => {    
  
  let stateItem = useState();
  console.log(stateItem);
  
  const expenseTitle = title;
  const expensePrice = price;
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(expensePrice);

  const make2digit = (text) =>{
    return text.toString().padStart(2, '0');
  };

  const clickHandler = () =>{
    console.log('버튼 클릭함');
  }

  return (    
    <Card  className = "expense-item">      
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{formattedPrice}원</div>
            </div>      
            <button id='btn' onClick={clickHandler}>수정</button>
            <button id='btn' onClick={e=>{console.log('삭제 클릭');}}>삭제</button>
    </Card>
  );
}

export default Expenseitem