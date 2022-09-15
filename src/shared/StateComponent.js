import React, {useRef, useState} from 'react';
import {Button} from "@mui/material";

const StateComponent = ({children, title}) => {
  const renderCount = ++useRef(0).current;

  console.log("ParentComponent is rendered")

  const [dummyState, setDummyState] =
    useState(0)

  const handleClick = () => {
    setDummyState(dummyState + 1)
  }

  return (
    <div className={"ParentContainer"}>
      <h3>{title}: {dummyState}</h3>
      <p>Render Count: {renderCount}</p>
      <Button disableRipple onClick={handleClick} variant={"contained"}>Change
        State
      </Button>
      <br/>
      <br/>
      {children}
    </div>
  )
    ;
}

export default StateComponent;