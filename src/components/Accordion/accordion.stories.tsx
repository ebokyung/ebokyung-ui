import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '.';
import 'src/styles/reset.css';

const dummy = [
  {
    title: 'Trigger 1',
    content: 'Content 1',
  },
  {
    title: 'Trigger 2',
    content: 'Content 2',
  },
  {
    title: 'Trigger 3',
    content: 'Content 3',
  },
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      {dummy.map(item => (
        <Accordion.Item>
          <Accordion.Trigger>{item.title}</Accordion.Trigger>
          <Accordion.Panel>{item.content}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  ),
};
