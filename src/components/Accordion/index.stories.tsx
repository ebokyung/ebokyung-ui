import type { Meta, StoryObj } from '@storybook/react';
import { MyAccordion } from '.';

const dummy = [
  {
    id: 'id1',
    title: 'Trigger 1',
    content: 'Content 1',
  },
  {
    id: 'id2',
    title: 'Trigger 2',
    content: 'Content 2',
  },
  {
    id: 'id3',
    title: 'Trigger 3',
    content: 'Content 3',
  },
];

const meta: Meta<typeof MyAccordion> = {
  title: 'Components/Accordion',
  component: MyAccordion,
  tags: ['autodocs'],
  args: {
    data: dummy,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultipleExpanded: Story = {
  args: {
    allowMultiple: true,
  },
};
