import './App.css';
import Expenseitem from './components/Expenseitem';


const App = () => {
  //지출 항목의 대한 배열
  const expenses = [
    {
      title: '바나나',
      price: '2000',
      date: new Date(2023, 8, 10)
    },
    {
      title: '키위',
      price: '8000',
      date: new Date(2023, 8, 14)
    },
    {
      title: '메론',
      price: '30000',
      date: new Date(2023, 8, 20)
    }
  ];
  return (  
    <>
      <Expenseitem 
        title= {expenses[0].title}
        price = {expenses[0].price}
        date = {expenses[0].date}
      />                     
      <Expenseitem 
        title= {expenses[1].title}
        price = {expenses[1].price}
        date = {expenses[1].date}
      />                     
      <Expenseitem 
        title= {expenses[2].title}
        price = {expenses[2].price}
        date = {expenses[2].date}
      />                     
    </>  
    
  );
}

export default App;
