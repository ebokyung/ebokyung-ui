import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '.';
import { useState } from 'react';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  args: {
    items: [
      { value: 'apple', option: 'Apple' },
      { value: 'orange', option: 'Orange' },
      { value: 'banana', option: 'Banana' },
      { value: 'grape', option: 'Grape' },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ items }) => {
    const [value, setValue] = useState('');

    return <Combobox value={value} onValueChange={setValue} items={items} placeholder="fruits" />;
  },
};
