import React from 'react';
import StateComponent from "../shared/StateComponent";
import Parent from "./Parent";

const JotaiComponent = () => {
  return (
    <StateComponent title={"Parent to Jotai"}>
      <Parent/>
    </StateComponent>
  )
}

export default JotaiComponent;

