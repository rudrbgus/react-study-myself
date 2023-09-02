import './App.css';
import Expenseitem from './components/Expenseitem';
import Expenses from './components/Expenses';


const App = () => {
  //지출 항목의 대한 배열
  const expenses = [
    {
      title: '바나나',
      price: '2000',
      date: new Date(2023, 8 - 1 , 10)
    },
    {
      title: '키위',
      price: '8000',
      date: new Date(2023, 6 - 1, 14)
    },
    {
      title: '메론',
      price: '30000',
      date: new Date(2023, 8 - 1, 20)
    }
  ];
  return (  
    <>
      <Expenses items ={expenses}/>                       
    </>  
    
  );
}

export default App;
