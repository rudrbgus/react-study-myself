import React from 'react'
import Expenseitem from './Expenseitem'

const Expenses = ({items}) => {
  return (
    <div className='expenses'>
        <Expenseitem
            title = {items[0].title}
            price = {items[0].price}
            date = {items[0].date}
        />
        <Expenseitem
            title = {items[1].title}
            price = {items[1].price}
            date = {items[1].date}
        />
        <Expenseitem
            title = {items[2].title}
            price = {items[2].price}
            date = {items[2].date}
        />
    </div> 
  )
}

export default Expenses