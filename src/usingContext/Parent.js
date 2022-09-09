import React from 'react';
import NormalChild from "./Child";
import {useReactContext} from "./context";
import {Button} from "@mui/material";
import MemoizedChild from "./MemoizedChild";

const Parent = React.memo((props) => {
  console.log("Parent rendered")
  const {
    parentRenderCount,
    handleParentBtnClick
  } = useReactContext()

  return (<div className="Parent roll-out">
    <Button
      fullWidth
      variant="contained"
      disableRipple
      onClick={handleParentBtnClick}
    >
      Increment Count
    </Button>
    <h3 className={"roll-out"}>Parent Render Count {parentRenderCount}</h3>
    <NormalChild/>
    <br/>
    <MemoizedChild/>
  </div>);
})

export default Parent;