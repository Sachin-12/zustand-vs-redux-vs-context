import React from 'react';
import ParentComponent from "../shared/ParentComponent";
import Child from "./Child";
import {useAtom} from "jotai";
import {count} from "./store"

const Parent = () => {
  const [countDummy, setCountDummy] = useAtom(count)
  return (
    <ParentComponent handleIncrement={() => setCountDummy(countDummy + 1)}>
      <Child/>
    </ParentComponent>
  )
}

export default Parent;