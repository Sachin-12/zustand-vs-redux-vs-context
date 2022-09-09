import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {MemoizedChild} from "../vanillaReact/Child";
import Provider from "../usingContext/provider";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/MemoizedChild">
        <MemoizedChild/>
      </ComponentPreview>
      <ComponentPreview
        path="/Provider">
        <Provider/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;