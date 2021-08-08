import levelFlowData from './__mocks__/level-flow.json';
import sandglassData from './__mocks__/sandglass.json';
import sandglassDataHoverInfo from './__mocks__/sandglass-hover';
import sandglassDataLazyLoad from './__mocks__/sandglass-lazy-load';
import { createLevelFlowTree, createSandglassTree } from '..';

const defaultArgs = {
  showToolbar: false,
  showBackgroundGrid: false,
  backgroundColor: '#fff',
  initialScale: 1
};
export default {
  title: 'Example/FancyTree',
  argTypes: {
    showToolbar: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    showBackgroundGrid: { control: 'boolean' },
    initialScale: { control: { type: 'range', max: 3, min: 0.2, step: 0.2 } }
  }
};

enum TreeType {
  LevelFlow = 'LevelFlow',
  Sandglass = 'Sandglass'
}

const Template = (type: TreeType, { ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  const div = document.createElement('div');
  div.setAttribute('id', 'FancyTreeDemo');
  setTimeout(() => {
    if (type === 'LevelFlow') {
      createLevelFlowTree({ mountNodeSelector: '#FancyTreeDemo', ...args });
    } else if (type === 'Sandglass') {
      createSandglassTree({ mountNodeSelector: '#FancyTreeDemo',...args });
    }
  }, 0);
  return div;
};

export const LevelFlowTree = Template.bind(null, TreeType.LevelFlow);
LevelFlowTree.args = {
  ...defaultArgs,
  data: levelFlowData
};

export const SandglassTree = Template.bind(null, TreeType.Sandglass);
SandglassTree.args = {
  ...defaultArgs,
  data: sandglassData
};


export const SandglassTreeHoverInfo = Template.bind(null, TreeType.Sandglass);
SandglassTreeHoverInfo.args = {
  ...defaultArgs,
  data: sandglassDataHoverInfo,
};

export const SandglassTreeLazyLoad = Template.bind(null, TreeType.Sandglass);
SandglassTreeLazyLoad.args = {
  ...defaultArgs,
  data: sandglassDataLazyLoad,
};
