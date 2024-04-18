import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultOnClick: Story = {
  args: {
    children: 'On click!',
    onClick: () => alert('Clicked!'),
  },
};

export const SolidLargePrimary: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'large',
  },
};

export const SolidLargeSecondary: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'large',
    color: 'secondary',
  },
};

export const SolidLargeNegative: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'large',
    color: 'negative',
  },
};

export const OutlineMediumPrimary: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    color: 'primary',
  },
};

export const OutlineMediumSecondary: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    color: 'secondary',
  },
};

export const OutlineMediumNegative: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    color: 'negative',
  },
};

export const GhostSmallPrimary: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'small',
    color: 'primary',
  },
};

export const GhostSmallSecondary: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'small',
    color: 'secondary',
  },
};

export const GhostSmallNegative: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'small',
    color: 'negative',
  },
};
