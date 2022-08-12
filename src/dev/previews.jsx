import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {MemoizedChild} from "../vanillaReact/Child";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/MemoizedChild">
        <MemoizedChild/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;