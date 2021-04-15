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
  variant: 'filled',
  color: 'primary',
  label: 'Button'
};
