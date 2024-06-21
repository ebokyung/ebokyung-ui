import type { Meta, StoryObj } from '@storybook/react';

import { Toast, ToastContainer } from '.';
import { Button } from '../Button';
import { useToast } from './toast.hooks';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Components/Toast',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Toast>;

// Simple
export const Default: Story = {
  render: () => {
    const ExampleButton = () => {
      const { toast } = useToast();
      return (
        <Button
          stretch
          onClick={() => {
            toast({
              //   variant: 'destructive',
              message: 'Uh oh! Something went wrong.',
              // description: 'There was a problem with your request.',
              //   action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
      );
    };

    return (
      <>
        <ToastContainer />
        <ExampleButton />
      </>
    );
  },
};

// With title
// With Action
// Destructive
