import React from 'react';
import {useReactContext} from "./context";
import ChildComponent from "../shared/ChildComponent";

const Child = React.memo((props) => {
  console.log("Normal Child rendered")
  const {childRenderCount} = useReactContext()
  return (
    <ChildComponent/>
  )
})

export default Child;