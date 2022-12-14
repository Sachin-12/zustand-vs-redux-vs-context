import {createContext, useContext} from "react";

export const initialReactContext = {
  parentRenderCount: 0,
  childRenderCount: 0,
  handleIncrement: () => {
  },
};

export const ReactContext = createContext(initialReactContext);

export const useReactContext = () => {
  return useContext(ReactContext);
};
