import { Card } from './Card';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    title: 'Card Title',
    children: 'This is a basic card with a title and some content.',
  },
};

export const WithoutTitle = {
  args: {
    children: 'This card has no title, just content.',
  },
};

export const WithFooter = {
  args: {
    title: 'Card with Footer',
    children: 'This card includes a footer section with action buttons.',
    footer: (
      <>
        <Button label="Cancel" variant="secondary" />
        <Button label="Confirm" variant="primary" />
      </>
    ),
  },
};

export const LongContent = {
  args: {
    title: 'Card with Long Content',
    children: (
      <>
        <p>
          This is a card with multiple paragraphs of content to demonstrate
          how the card handles longer text.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </>
    ),
    footer: <Button label="Read More" variant="outline" />,
  },
};
