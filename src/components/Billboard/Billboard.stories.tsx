import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Billboard } from './Billboard';

const meta = {
  title: 'Components/Billboard',
  component: Billboard,
  parameters: {
    docs: {
      description: {
        component:
          'A billboard component that displays a promotional banner with a category tag, headline, body text, and call-to-action button. Features an icon in the header and a decorative image on the right side.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main headline text displayed in the billboard',
    },
    bodyText: {
      control: 'text',
      description: 'The body text displayed below the title (supports HTML)',
    },
    onButtonClick: {
      description: 'Callback function when the button is clicked',
    },
  },
  args: {
    title: 'Ready to kickstart your career?',
    bodyText:
      "You're just a few clicks away. <b>Complete our quick application</b> to get started. Don't wait, roles fill quickly!",
    onButtonClick: fn(),
  },
} satisfies Meta<typeof Billboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
