import ContextProvider from "./provider"

import React, {useState} from 'react';
import Parent from "./Parent";
import {Button} from "@mui/material";

const ContextComponent = () => {
  console.log("Parent to Context Provider is rendered")
  const [dummyState, setDummyState] = useState(0)
  const handleClick = () => {
    setDummyState(dummyState + 1)
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h3>Parent to Context Provider.</h3>
      <Button disableRipple onClick={handleClick} variant={"contained"}>Click
        Me </Button>
      <br/>
      <br/>
      <ContextProvider>
        <Parent/>
      </ContextProvider>
    </div>
  );
};

export default ContextComponent;
