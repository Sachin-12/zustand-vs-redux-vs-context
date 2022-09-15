import React from 'react';
import Parent from "./Parent";
import StateComponent from "../shared/StateComponent";

const ZustandComponent = () => {
  return (
    <StateComponent title={"Parent to Zustand"}>
      <Parent/>
    </StateComponent>
  );
};

export default ZustandComponent;
