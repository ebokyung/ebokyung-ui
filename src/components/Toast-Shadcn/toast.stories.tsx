import type { Meta, StoryObj } from '@storybook/react';

import { Toast, ToastContainer } from '.';
import { Button } from '../Button';
import { useToast } from './toast.hooks';

const meta: Meta<typeof ToastContainer> = {
  component: ToastContainer,
  title: 'Components/Toast',
  tags: ['autodocs'],
  argTypes: {
    position: {
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

const ExampleButton = () => {
  const { toast } = useToast();
  return (
    <Button
      stretch
      onClick={() => {
        toast({
          //   variant: 'destructive',
          message: 'hi this is a toast message',
          // description: 'There was a problem with your request.',
          //   action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
};

// Simple
export const Default: Story = {
  render: () => {
    return (
      <>
        <ToastContainer />
        <ExampleButton />
      </>
    );
  },
};

export const Position: Story = {
  render: ({ position, ...props }) => {
    return (
      <>
        <ToastContainer position={position} />
        <ExampleButton />
      </>
    );
  },
};

// With title
// With Action
// Destructive
