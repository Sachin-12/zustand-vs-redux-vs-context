import { useState } from "react";
import { initialReactContext, ReactContext } from "./context";

export const Provider = ({ children }) => {
  const [parentRenderCount, setParentRenderCount] = useState(
    initialReactContext.parentRenderCount
  );
  const [childRenderCount, setChildRenderCount] = useState(
    initialReactContext.childRenderCount
  );

  const handleParentBtnClick = () => {
    setParentRenderCount(parentRenderCount + 1);
  };

  const handleChildBtnClick = () => {
    setChildRenderCount(childRenderCount + 1);
  };

  return (
    <ReactContext.Provider
      value={{
        ...initialReactContext,
        parentRenderCount,
        childRenderCount,
        handleChildBtnClick,
        handleParentBtnClick,
      }}
    >
      {children}
    </ReactContext.Provider>
  );
};
