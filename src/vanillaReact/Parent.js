import {Child, MemoizedChild} from "./Child";
import {Button} from "@mui/material";
import React, {useState} from "react";
import "../App.css";
import "./Child.css";

const Parent = () => {
  console.log("Vanilla react parent component")
  const [count, setCount] = useState(0);

  return (<div className="Parent roll-out">
    <Button
      fullWidth
      variant="contained"
      disableRipple
      onClick={() => setCount(count + 1)}
    >
      Increment Count
    </Button>
    <h3 className={"roll-out"}>ParentComponent Render Count {count}</h3>
    <Child childType="Normal Child"/>
    <br/>
    <MemoizedChild childType="Memoized Child"/>
  </div>);
};

export default Parent