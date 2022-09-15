import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Child from "./child";
import ParentComponent from "../shared/ParentComponent";
import {decrement, increment} from "./redux/reducer";

const Parent = () => {
  const count = useSelector(store => store.counter.count);
  const dispatch = useDispatch();
  return (
    <ParentComponent handleDecrement={() => dispatch(decrement())}
                     handleIncrement={() => dispatch(increment())}>
      <Child/>
    </ParentComponent>
  );
};

export default Parent;
