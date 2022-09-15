import React from 'react';
import ChildComponent from "../shared/ChildComponent";
import {useAtom} from "jotai";
import {childCount} from "./store";

const Child = () => {
  const [dummyCount] = useAtom(childCount)
  return <ChildComponent/>
}

export default Child