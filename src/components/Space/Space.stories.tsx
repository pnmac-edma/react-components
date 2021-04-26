import { Story, Meta } from '@storybook/react';
import Space, { SpaceProps } from '../Space';

export default {
  title: 'Atoms/Space',
  component: Space,
} as Meta;

const Template: Story<SpaceProps> = (args) => <Space {...args}><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div><div style={{'border': '1px solid black'}}>Child</div></Space>;

export const Playground = Template.bind({});
Playground.args = {};

export const Inner = Template.bind({});
Inner.args = {};

export const Outer = Template.bind({});
Outer.args = {
    outer: true
};

export const InnerAndOuter = Template.bind({});
InnerAndOuter.args = {
    inner: true,
    outer: true
};

export const Custom = Template.bind({});
Custom.args = {
    outer: [24, 0, 0, 80],
    inner: [24, 16],
    wrap: true
};
