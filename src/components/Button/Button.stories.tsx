import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  variant: 'filled',
  label: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'filled',
  label: 'Secondary'
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Outlined'
};
