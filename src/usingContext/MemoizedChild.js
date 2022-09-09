import React from 'react';
import {useReactContext} from "./context";
import {getP} from "../vanillaReact/Child";
import {Paper} from "@mui/material";

const MemoizedChild = React.memo((props) => {
  const {childRenderCount} = useReactContext()
  console.log('MemoizedChild is rendered')
  const currentDate = new Date();
  return (
    <Paper className="roll-out child" elevation={3}>
      <p>MemoizedChild</p>
      {getP(currentDate)}
    </Paper>
  )
})

export default MemoizedChild;