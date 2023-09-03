import React from 'react'

const Hello = (props) => {
  console.log("Hello Component");
  console.log(props);
  return (
    <>
      <div>Hello</div>
      {props.children}
    </>
  )
}

export default Hello;