import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../Button';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Data Entry/Button',
  component: Button,
  decorators: [withDesign],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
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
  label: 'Secondary'
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  label: 'Link'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  label: 'Full Width'
};

Template.parameters = {
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true
  }
}
