import { createContext, useContext } from "react";

const defaultCallback = () => {};

export const initialReactContext = {
  parentRenderCount: 0,
  childRenderCount: 0,
  handleChildBtnClick: defaultCallback,
  handleParentBtnClick: defaultCallback,
};

export const ReactContext = createContext();

export const useReactContext = () => {
  return useContext(ReactContext);
};
