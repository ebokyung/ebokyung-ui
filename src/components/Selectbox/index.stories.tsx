import type { Meta, StoryObj } from '@storybook/react';
import { Selectbox } from '.';
import 'src/styles/reset.css';
import { useState } from 'react';

const meta: Meta<typeof Selectbox> = {
  title: 'Components/Selectbox',
  component: Selectbox,
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

    return <Selectbox onSelectedOptionChange={setValue} selectedOption={value} items={items} label="fruits" />;
  },
};

export const Many: Story = {
  render: ({ items }) => {
    const [value, setValue] = useState('');
    const [color, setColor] = useState('');

    const colors = [
      { value: 'red', option: 'Red' },
      { value: 'blue', option: 'Blue' },
      { value: 'green', option: 'Green' },
    ];

    return (
      <>
        <Selectbox onSelectedOptionChange={setValue} selectedOption={value} items={items} label="fruits" />
        <Selectbox onSelectedOptionChange={setColor} selectedOption={color} items={colors} label="colors" />
      </>
    );
  },
};
