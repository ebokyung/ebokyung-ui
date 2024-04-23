import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, CardImage } from '.';

const dummy = {
  title: 'Hello Card',
  content:
    '무준딘즌으려고 넌띠는 롤흠겨다 디꽁새기는 운 호스삼 잉크부는 게췰에서 세슨의. 흐안아 스초 대자혀므다 송갈어의 앙다기애가. 게룸도 퐂덕얼즈 건머가 도툰 음존인가 스짜헌 밬오가. 붐핼이피를 바어태덜 드어더는 르적 아비쏭며햐를 악노를, 에비버젝을, 깔즐 인룬지고자 검하나즈와. 잔자는 그진을 고나와 을도훈기 뮌운군 군하마는 둔넨조고 아좌훈흥온 시럭칸으리.',
  imgSrc:
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  imgAlt: 'Green double couch with wooden legs',
};

const meta: Meta<typeof Card> = {
  title: 'Components/Button',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>{dummy.title}</CardTitle>
          <p>header description</p>
        </CardHeader>
        <CardImage src={dummy.imgSrc} alt={dummy.imgAlt} />
        <CardBody>
          <p>{dummy.content}</p>
        </CardBody>
        <CardFooter justify="spaceBetween">
          <button>button</button>
          <button>button</button>
        </CardFooter>
      </>
    ),
  },
};
