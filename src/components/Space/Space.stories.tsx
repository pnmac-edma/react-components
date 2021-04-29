import { Story, Meta } from '@storybook/react';
import Space, { SpaceProps } from '../Space';
import Button from '../Button';

export default {
  title: 'Layout/Space',
  component: Space,
} as Meta;

const Template: Story<SpaceProps> = (args) => <Space {...args}><Button label="Child"/><Button label="Child"/><Button label="Child"/><Button label="Child"/><Button label="Child"/><Button label="Child"/><Button label="Child"/><Button label="Child"/><Button label="Child"/><Button label="Child"/><Button label="Child"/><Button label="Child"/></Space>;

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
