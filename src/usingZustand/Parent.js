import React from 'react';
import useStore from "./store";
import Child from "./Child";
import ParentComponent from "../shared/ParentComponent";

const Parent = () => {
  console.log("ParentComponent rendered");
  const {count, increase, decrease} = useStore(state => state)
  return (
    <ParentComponent handleIncrement={increase} handleDecrement={decrease}>
      <Child/>
    </ParentComponent>
  )
}

export default Parent;
