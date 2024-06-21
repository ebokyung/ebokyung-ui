import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '.';
import { useState } from 'react';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const items = [
      { value: 'apple', option: 'Apple' },
      { value: 'orange', option: 'Orange' },
      { value: 'banana', option: 'Banana' },
      { value: 'grape', option: 'Grape' },
    ];

    return (
      <>
        selected value: {value}
        <Combobox value={value} onValueChange={setValue}>
          <Combobox.Trigger placeholder="select a fruit" />
          <Combobox.Options>
            {items.map(item => (
              <Combobox.Option key={item.value} value={item.option} />
            ))}
          </Combobox.Options>
        </Combobox>
      </>
    );
  },
};
