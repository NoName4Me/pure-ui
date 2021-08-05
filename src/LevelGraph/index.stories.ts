
import data from './__mock__/data.json';
import { createLevelGraph } from '.'

export default {
  title: 'Example/LevelGraph',
  argTypes: {

  },
};


const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  const div = document.createElement('div');
  div.setAttribute('id', 'LevelGraphDemo')
  setTimeout(() => {
    createLevelGraph({ mountNodeSelector: '#LevelGraphDemo', ...args });
  }, 0);
  return div;
};

export const Default = Template.bind({data});
Default.args = {
  data
};