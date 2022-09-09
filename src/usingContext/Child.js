import React from 'react';
import {useReactContext} from "./context";
import {Paper} from "@mui/material";
import {getP} from "../vanillaReact/Child";

const Child = (props) => {
  console.log("Normal Child rendered")
  const {childRenderCount, handleChildBtnClick} = useReactContext()
  const currentDate = new Date();
  return (
    <Paper className="roll-out child" elevation={3}>
      <p>Normal Child</p>
      {getP(currentDate)}

      {/*<Button*/}
      {/*  fullWidth*/}
      {/*  variant="contained"*/}
      {/*  disableRipple*/}
      {/*  onClick={handleChildBtnClick}*/}
      {/*>*/}
      {/*  Increment Count*/}
      {/*</Button>*/}
      {/*<p>Child rendered Count {childRenderCount}</p>*/}
    </Paper>
  )
}

export default Child;