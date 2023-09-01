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
      <Expenseitem items ={expense}/>                       
    </>  
    
  );
}

export default App;
