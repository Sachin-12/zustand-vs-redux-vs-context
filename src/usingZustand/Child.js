import React from 'react';
import useStore from "./store";
import ChildComponent from "../shared/ChildComponent";

const Child = React.memo((props) => {
    console.log("Child rendered")
    const childCount = useStore(state => state.childCount);
    return (
      <ChildComponent/>
    )
  }
)
export default Child;