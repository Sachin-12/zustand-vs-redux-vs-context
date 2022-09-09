import {useCallback, useMemo, useState} from "react";
import {initialReactContext, ReactContext} from "./context";

const Provider = ({children}) => {
  const [parentRenderCount, setParentRenderCount] = useState(initialReactContext.parentRenderCount);

  const [childRenderCount] = useState(initialReactContext.childRenderCount);

  const handleParentBtnClick = useCallback(
    () => {
      setParentRenderCount((parentRenderCount) => parentRenderCount + 1);
    },
    [],
  );

  const contextValue = useMemo(() => ({
    parentRenderCount: parentRenderCount,
    handleParentBtnClick: handleParentBtnClick,
    childRenderCount: childRenderCount
  }), [parentRenderCount, handleParentBtnClick, childRenderCount]);

  return (<ReactContext.Provider
    value={contextValue}
  >
    {children}
  </ReactContext.Provider>);
};

export default Provider