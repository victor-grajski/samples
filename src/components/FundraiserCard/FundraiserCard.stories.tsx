import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import FundraiserCard from './FundraiserCard';

const meta = {
  title: 'Components/FundraiserCard',
  component: FundraiserCard,
  parameters: {
    docs: {
      description: {
        component:
          'A responsive fundraiser card component that displays campaign information with an image, title, organizer, and progress. The card adapts to different screen sizes: on mobile (≤640px), it displays in a horizontal layout with the image on the left and content on the right. On desktop (>640px), it shows a vertical layout with the image on top. Long titles are automatically truncated with ellipses, and the card features a smooth hover effect with image zoom.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the fundraiser',
    },
    organizerName: {
      control: 'text',
      description: 'Name of the person organizing the fundraiser',
    },
    amountRaised: {
      control: 'number',
      description: 'Amount of money raised so far',
    },
    goalAmount: {
      control: 'number',
      description: 'Target fundraising goal',
    },
    imageUrl: {
      control: 'text',
      description: 'URL of the fundraiser image',
    },
    tag: {
      control: 'text',
      description: 'Category tag for the fundraiser',
    },
    url: {
      control: 'text',
      description: 'Link to the full fundraiser page',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the card',
    },
  },
  args: {
    onClick: fn(e => {
      e.preventDefault();
    }),
  },
} satisfies Meta<typeof FundraiserCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Help Save the Community Center',
    organizerName: 'Sarah Johnson',
    amountRaised: 12500,
    goalAmount: 25000,
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    tag: 'Community',
    url: '#',
    onClick: fn(e => {
      e.preventDefault();
    }),
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Support Our Mission to Build a New Community Library and Learning Center for All Ages',
    organizerName: 'Library Foundation Board',
    amountRaised: 125000,
    goalAmount: 300000,
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop',
    tag: 'Education & Culture',
    url: '#',
    onClick: fn(e => {
      e.preventDefault();
    }),
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const MobileView: Story = {
  args: {
    title: 'Help Save the Community Center',
    organizerName: 'Sarah Johnson',
    amountRaised: 12500,
    goalAmount: 25000,
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    tag: 'Community',
    url: '#',
    onClick: fn(e => {
      e.preventDefault();
    }),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const MultipleCardsDesktop: Story = {
  render: () => {
    const handleClick = fn((e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
    });

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', maxWidth: '1200px' }}>
        <FundraiserCard
          title="Help Save the Community Center"
          organizerName="Sarah Johnson"
          amountRaised={12500}
          goalAmount={25000}
          imageUrl="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
          tag="Community"
          url="#"
          onClick={handleClick}
        />
        <FundraiserCard
          title="Medical Fund for John Doe"
          organizerName="Jane Doe"
          amountRaised={45000}
          goalAmount={100000}
          imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
          tag="Medical"
          url="#"
          onClick={handleClick}
        />
        <FundraiserCard
          title="Save the Animal Shelter"
          organizerName="Local Animal Rescue"
          amountRaised={3200}
          goalAmount={15000}
          imageUrl="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop"
          tag="Animals"
          url="#"
          onClick={handleClick}
        />
      </div>
    );
  },
  args: {
    title: '',
    organizerName: '',
    amountRaised: 0,
    goalAmount: 0,
    imageUrl: '',
    tag: '',
    url: '#',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const MultipleCardsMobile: Story = {
  render: () => {
    const handleClick = fn((e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
    });

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', maxWidth: '1200px' }}>
        <FundraiserCard
          title="Help Save the Community Center"
          organizerName="Sarah Johnson"
          amountRaised={12500}
          goalAmount={25000}
          imageUrl="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
          tag="Community"
          url="#"
          onClick={handleClick}
        />
        <FundraiserCard
          title="Medical Fund for John Doe"
          organizerName="Jane Doe"
          amountRaised={45000}
          goalAmount={100000}
          imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
          tag="Medical"
          url="#"
          onClick={handleClick}
        />
        <FundraiserCard
          title="Save the Animal Shelter"
          organizerName="Local Animal Rescue"
          amountRaised={3200}
          goalAmount={15000}
          imageUrl="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop"
          tag="Animals"
          url="#"
          onClick={handleClick}
        />
      </div>
    );
  },
  args: {
    title: '',
    organizerName: '',
    amountRaised: 0,
    goalAmount: 0,
    imageUrl: '',
    tag: '',
    url: '#',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
