import React from "react";
import "./Child.css";
import {Paper} from "@mui/material";

const MemoizedChild = React.memo((props) => <Child {...props}/>)

export function DisplayRenderTime() {
  const currentDate = new Date();
  return <p>{`Last Rendered at ${currentDate.getHours()}h : ${currentDate.getMinutes()}m 
      : ${currentDate.getSeconds()}s : ${currentDate.getMilliseconds()}ms`}</p>;
}

const Child = ({childType}) => {
  if (childType === "Normal Child") {
    console.log("Vanilla react Normal Child component rendered")
  } else {
    console.log("Vanilla react MemoizedChild component rendered")
  }

  const currentDate = new Date()
  return (
    <Paper className="roll-out child" elevation={3}>
      <p>{childType}</p>
      <DisplayRenderTime/>
    </Paper>
  )
}


export {MemoizedChild, Child}