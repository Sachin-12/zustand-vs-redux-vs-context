import React from 'react';
import Parent from "./Parent";
import StateComponent from "../shared/StateComponent";
import Provider from "./provider";

const ContextComponent = () => {
  return (
    <StateComponent title={"Parent to Context"}>
      <Provider>
        <Parent/>
      </Provider>
    </StateComponent>
  );
};

export default ContextComponent;
