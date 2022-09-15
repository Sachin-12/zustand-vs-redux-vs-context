import React, {useCallback, useMemo, useState} from "react";
import {initialReactContext, ReactContext} from "./context";

const Provider = ({children}) => {
  const [parentRenderCount, setParentRenderCount] = useState(initialReactContext.parentRenderCount);

  const [childRenderCount] = useState(initialReactContext.childRenderCount);

  const handleIncrement = useCallback(
    () => {
      setParentRenderCount((parentRenderCount) => parentRenderCount + 1);
    },
    [],
  );

  const contextValue = useMemo(() => ({
    parentRenderCount: parentRenderCount,
    handleIncrement: handleIncrement,
    childRenderCount: childRenderCount
  }), [parentRenderCount, handleIncrement, childRenderCount]);

  return (<ReactContext.Provider
    value={contextValue}
  >
    {children}
  </ReactContext.Provider>);
};

export default Provider