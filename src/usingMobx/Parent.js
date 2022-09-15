import React from 'react';
import ParentComponent from "../shared/ParentComponent";
import Child from "./Child";

const Parent = () => {
  return (
    <ParentComponent>
      <Child/>
    </ParentComponent>
  )
}

export default Parent;