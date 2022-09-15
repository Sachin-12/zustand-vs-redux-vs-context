import React from 'react';
import {useReactContext} from "./context";
import ChildComponent from "../shared/ChildComponent";

const MemoizedChild = React.memo((props) => {
  const {childRenderCount} = useReactContext()
  console.log('MemoizedChild is rendered')
  return (
    <ChildComponent/>
  )
})

export default MemoizedChild;