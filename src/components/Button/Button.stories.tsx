import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../Button';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [withDesign],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  variant: 'filled',
  label: 'Primary'
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/hhRwCxtuZb27X3XFI03rqZ/Kirby-Patterns?node-id=496%3A10835',
  }
}

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

Template.parameters = {
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true
  }
}
