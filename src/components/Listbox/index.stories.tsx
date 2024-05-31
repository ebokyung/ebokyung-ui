import type { Meta, StoryObj } from '@storybook/react';
import { Listbox } from '.';
import { useState } from 'react';

const meta: Meta<typeof Listbox> = {
  title: 'Components/Listbox',
  component: Listbox,
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

    return <Listbox onSelectedOptionChange={setValue} selectedOption={value} items={items} label="fruits" />;
  },
};

export const Many: Story = {
  render: ({ items }) => {
    const [fruit, setFruit] = useState('');
    const [color, setColor] = useState('');

    const colors = [
      { value: 'red', option: 'Red' },
      { value: 'blue', option: 'Blue' },
      { value: 'green', option: 'Green' },
    ];

    return (
      <>
        <Listbox onSelectedOptionChange={setFruit} selectedOption={fruit} items={items} label="fruits" />
        <div>selected fruit: {fruit}</div>
        <Listbox onSelectedOptionChange={setColor} selectedOption={color} items={colors} label="colors" />
        <div>selected color: {color}</div>
      </>
    );
  },
};
