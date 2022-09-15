import React from 'react';
import {useReactContext} from "./context";
import ParentComponent from "../shared/ParentComponent";
import Child from "./Child";

const Parent = React.memo((props) => {
    console.log("ParentComponent rendered")
    const {
      parentRenderCount,
      handleIncrement
    } = useReactContext()

    return (
      <ParentComponent handleIncrement={handleIncrement}>
        <Child/>
      </ParentComponent>
    );

  }
)
export default Parent;