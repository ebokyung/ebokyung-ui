import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '.';

const meta: Meta<typeof Card> = {
  title: 'Components/Button',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>header.title</CardTitle>
        </CardHeader>
        <CardBody>
          <div>body</div>
        </CardBody>
        <CardFooter>
          footer
          <button>button</button>
        </CardFooter>
      </>
    ),
  },
};
