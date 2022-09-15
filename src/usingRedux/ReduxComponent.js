import React from 'react';
import StateComponent from "../shared/StateComponent"
import Parent from "./Parent";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const ReduxComponent = (props) => {
  return (
    <StateComponent title={"Parent to Redux Provider"}>
      <Provider store={store}>
        <Parent/>
      </Provider>
    </StateComponent>
  )
}

export default ReduxComponent;