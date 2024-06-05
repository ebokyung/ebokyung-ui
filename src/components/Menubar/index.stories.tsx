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

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Menubar closeOnSelect>
        <Menubar.Menu>
          {/* Trigger, Content는 Box 컴포넌트 as props로 변경가능하게 */}
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content
          // motion={}
          >
            <Menubar.Item icon={'->'} shortcut={'⌘T'} isDisabled closeOnSelect>
              New Tab
            </Menubar.Item>
            <Menubar.Item
              as="a"
              // href="#"
            >
              Link
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item icon={'->'} shortcut={'⌘T'}>
              ShareShareShareShareShare
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Print</Menubar.Item>
            {/* menu group */}
            {/* <menuOptionGroup defaultValue type={checkbox | radio} value onChange> */}
            {/* <menuItemOption closeOnSelect shortcut/> */}
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>Share</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Print</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
  },
};

// 기능 참고: https://v2.chakra-ui.com/docs/components/menu

// 3. 메뉴 세로 가로
// 1. 한 번 클릭 후에 호버해야 컨텐츠 뜨기
// 2. 컴텐츠부분 위치 유동적으로
