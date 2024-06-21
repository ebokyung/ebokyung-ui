import type { Meta, StoryObj } from '@storybook/react';

import { Menubar } from '.';

const meta: Meta<typeof Menubar> = {
  component: Menubar,
  title: 'Components/Menubar',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Menubar>;

// 참고:
// https://v2.chakra-ui.com/docs/components/menu
// https://ui.shadcn.com/docs/components/menubar

// TODO:
// 1. 컨텐츠부분 가로 위치 유동적으로
// 2. 메뉴 세로 가로
// 3. 애니메이션
// 4. semantic

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item onClick={() => alert('copy!')}>Share</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item disabled={true} onClick={() => alert('print!')}>
              Print
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content
          // motion={}
          >
            <Menubar.Item icon={'🗂️'} shortcut={'⌘T'} closeOnSelect={false}>
              New Tab
            </Menubar.Item>
            <Menubar.Item
              as="a"
              // href="#"
              disabled
            >
              Link
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item icon={'🔗'} onClick={() => alert('copy!')}>
              Share
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item onClick={() => alert('print!')}>Print</Menubar.Item>
            {/* menu group */}
            {/* <menuOptionGroup defaultValue type={checkbox | radio} value onChange> */}
            {/* <menuItemOption closeOnSelect shortcut/> */}
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
  },
};

export const IconAndShortcut: Story = {
  args: {},
  render: () => {
    return (
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item shortcut={'⌘T'}>New Tab</Menubar.Item>
            <Menubar.Item icon={'🔗'}>Share</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
  },
};

export const CloseOnSelect: Story = {
  args: {},
  render: () => {
    return (
      <Menubar closeOnSelect>
        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>true (default)</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item closeOnSelect={false}>false</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
  },
};

export const Disabled: Story = {
  args: {},
  render: () => {
    return (
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item onClick={() => alert('copy!')}>Share</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item onClick={() => alert('print!')} disabled>
              Print
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
  },
};

export const SementicItem: Story = {
  args: {},
  render: () => {
    return (
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Separator />
            <Menubar.Item as="a" href="#">
              Link
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
  },
};
