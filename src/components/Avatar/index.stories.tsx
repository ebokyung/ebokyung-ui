import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

const dummy = {
  avatarSrc: 'https://bit.ly/sage-adebayo',
  avatarName: 'sage-adebayo',
};

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Avatar',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => {
    return (
      <Avatar>
        <img src={dummy.avatarSrc} alt={dummy.avatarName} />
      </Avatar>
    );
  },
};
