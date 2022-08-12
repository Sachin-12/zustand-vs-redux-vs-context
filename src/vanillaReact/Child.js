import React from "react";
import "./Child.css";
import {Paper} from "@mui/material";

const MemoizedChild = React.memo((props) => <Child {...props}/>)

const Child = ({childType}) => {
  const currentDate = new Date()
  return (
    <Paper className="roll-out child" elevation={3}>
      <p>{childType}</p>
      <p>{`Last Rendered at ${currentDate.getHours()}h : ${currentDate.getMinutes()}m 
      : ${currentDate.getSeconds()}s : ${currentDate.getMilliseconds()}ms`}</p>
    </Paper>
  )
}


export {MemoizedChild, Child}