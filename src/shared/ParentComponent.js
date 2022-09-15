import React from 'react';
import {Button} from "@mui/material";
import useStore from "./store";
import Child from "./Child";
import {DisplayRenderTime} from "../vanillaReact/Child";

const Parent = React.memo(() => {
  console.log("Parent rendered");
  const {count, increase, decrease} = useStore(state => state)
  return (<div className="Parent roll-out">
      <Button
        variant="contained"
        disableRipple
        onClick={increase}
      >
        Increment Count
      </Button>

      <br/>
      <Button
        variant="contained"
        disableRipple
        onClick={decrease}
      >
        Decrement Count
      </Button>
      <DisplayRenderTime/>
      <Child/>
    </div>
  )
})

export default Parent;
