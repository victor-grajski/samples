import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};
