import type { Meta, StoryObj } from '@storybook/react';
import { Listbox } from '.';
import { useState } from 'react';

const meta: Meta<typeof Listbox> = {
  title: 'Components/Listbox',
  component: Listbox,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: props => {
    const [value, setValue] = useState('');

    const items = [
      { value: 'apple', option: 'Apple' },
      { value: 'orange', option: 'Orange' },
      { value: 'banana', option: 'Banana' },
      { value: 'grape', option: 'Grape' },
    ];

    return (
      <Listbox {...props} selectedOption={value} onSelectedOptionChange={setValue}>
        <Listbox.Trigger label="fruits" />
        <Listbox.Options>
          {items.map(item => {
            return <Listbox.Option key={item.value} item={item} />;
          })}
        </Listbox.Options>
      </Listbox>
    );
  },
};

export const Many: Story = {
  render: () => {
    const [fruit, setFruit] = useState('');
    const [color, setColor] = useState('');

    const fruits = [
      { value: 'apple', option: 'Apple' },
      { value: 'orange', option: 'Orange' },
      { value: 'banana', option: 'Banana' },
      { value: 'grape', option: 'Grape' },
    ];

    const colors = [
      { value: 'red', option: 'Red' },
      { value: 'blue', option: 'Blue' },
      { value: 'green', option: 'Green' },
    ];

    return (
      <>
        <Listbox selectedOption={fruit} onSelectedOptionChange={setFruit}>
          <Listbox.Trigger label="fruits" />
          <Listbox.Options>
            {fruits.map(item => {
              return <Listbox.Option key={item.value} item={item} />;
            })}
          </Listbox.Options>
        </Listbox>
        <div>selected fruit: {fruit}</div>

        <Listbox selectedOption={color} onSelectedOptionChange={setColor}>
          <Listbox.Trigger label="colors" />
          <Listbox.Options>
            {colors.map(item => {
              return <Listbox.Option key={item.value} item={item} />;
            })}
          </Listbox.Options>
        </Listbox>
        <div>selected color: {color}</div>
      </>
    );
  },
};
