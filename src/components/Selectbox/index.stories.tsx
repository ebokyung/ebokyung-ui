import type { Meta, StoryObj } from '@storybook/react';
import { Selectbox } from '.';
import 'src/styles/reset.css';

const meta: Meta<typeof Selectbox> = {
  title: 'Components/Selectbox',
  component: Selectbox,
  tags: ['autodocs'],
  args: {
    label: 'fruits',
    options: [
      { value: 'apple', option: 'Apple' },
      { value: 'orange', option: 'Orange' },
      { value: 'banana', option: 'Banana' },
      { value: 'grape', option: 'Grape' },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
