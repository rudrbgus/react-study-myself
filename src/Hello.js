import React from 'react'
import Card from './components/UI/Card';

const Hello = (props) => {
  console.log("Hello Component");
  console.log(props);
  return (
    
    <Card className={'rectangle'}>
      <div>Hello</div>
      {props.children}
    </Card>
    
  )
}

export default Hello;