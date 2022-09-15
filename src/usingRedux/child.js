import React from 'react';
import {useSelector} from "react-redux";
import ChildComponent from "../shared/ChildComponent";

// Redux same as context, you cant stop re-rendering child components
const Child = () => {
  const childCount = useSelector(store => store.counter.childCount)
  return (
    <ChildComponent/>
  );
}

export default Child;
