import React, {useRef} from 'react';
import {Button} from "@mui/material";
import {DisplayRenderTime} from "../vanillaReact/Child";

const ParentComponent = ({
                           children, handleIncrement
                         }) => {
  console.log("ParentComponent rendered");

  const renderCount = ++useRef(0).current;
  return (<div className="Parent roll-out">
    <Button
      variant="contained"
      disableRipple
      onClick={handleIncrement}
    >
      Change State
    </Button>

    <br/>
    <p>Parent Render Count: {renderCount}</p>
    <DisplayRenderTime/>
    {children}
  </div>)
}

export default ParentComponent;


const MemoizedParentComponent = React.memo(({
                                              children,
                                              handleIncrement,
                                              handleDecrement
                                            }) => {
    console.log("Memoized ParentComponent rendered");
    return (<div className="Parent roll-out">
      <Button
        variant="contained"
        disableRipple
        onClick={handleIncrement}
      >
        Increment Count
      </Button>

      <br/>
      <Button
        variant="contained"
        disableRipple
        onClick={handleDecrement}
      >
        Decrement Count
      </Button>
      <DisplayRenderTime/>
      {children}
    </div>)
  }
)
export {MemoizedParentComponent}