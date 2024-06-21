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

// export const Many: Story = {
//   render: ({ items }) => {
//     const [fruit, setFruit] = useState('');
//     const [color, setColor] = useState('');

//     const colors = [
//       { value: 'red', option: 'Red' },
//       { value: 'blue', option: 'Blue' },
//       { value: 'green', option: 'Green' },
//     ];

//     return (
//       <>
//         <Listbox onSelectedOptionChange={setFruit} selectedOption={fruit} items={items} label="fruits" />
//         <div>selected fruit: {fruit}</div>
//         <Listbox onSelectedOptionChange={setColor} selectedOption={color} items={colors} label="colors" />
//         <div>selected color: {color}</div>
//       </>
//     );
//   },
// };

// export const ObjectOptions: Story = {
//   render: ({ items }) => {
//     const [fruit, setFruit] = useState('');
//     const [color, setColor] = useState('');

//     const colors = [
//       { value: 'red', option: 'Red' },
//       { value: 'blue', option: 'Blue' },
//       { value: 'green', option: 'Green' },
//     ];

//     return (
//       <>
//         <Listbox onSelectedOptionChange={setFruit} selectedOption={fruit} items={items} label="fruits" />
//         <div>selected fruit: {fruit}</div>
//         <Listbox onSelectedOptionChange={setColor} selectedOption={color} items={colors} label="colors" />
//         <div>selected color: {color}</div>
//       </>
//     );
//   },
// };
