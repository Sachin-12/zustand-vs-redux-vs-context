import React, {useRef} from 'react';
import {Paper} from "@mui/material";
import {DisplayRenderTime} from "../vanillaReact/Child";

const ChildComponent = (props) => {
  const renderCount = ++useRef(0).current
  console.log("Child rendered")
  return (
    <Paper className="roll-out child" elevation={3}>
      <p>Child Render Count: {renderCount}</p>
      <DisplayRenderTime/>
    </Paper>
  )
}

export default ChildComponent;