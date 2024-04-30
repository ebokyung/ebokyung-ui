import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, CardImage, Button } from '@/components';
import { Avatar } from '@/components/Avatar';
import '@/styles/reset.css';

const dummy = {
  title: 'Hello Card',
  content:
    '무준딘즌으려고 넌띠는 롤흠겨다 디꽁새기는 운 호스삼 잉크부는 게췰에서 세슨의. 흐안아 스초 대자혀므다 송갈어의 앙다기애가. 게룸도 퐂덕얼즈 건머가 도툰 음존인가 스짜헌 밬오가. 붐핼이피를 바어태덜 드어더는 르적 아비쏭며햐를 악노를, 에비버젝을, 깔즐 인룬지고자 검하나즈와. 잔자는 그진을 고나와 을도훈기 뮌운군 군하마는 둔넨조고 아좌훈흥온 시럭칸으리.',
  imgSrc:
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  imgAlt: 'Green double couch with wooden legs',
  avatarSrc: 'https://bit.ly/sage-adebayo',
  avatarName: 'sage-adebayo',
};

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
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
    direction: {
      options: ['column', 'row'],
      control: { type: 'select' },
    },
  },
  render: props => (
    <Card size={props.size} direction={props.direction}>
      {props.children}
    </Card>
  ),
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle> Customer dashboard</CardTitle>
        </CardHeader>
        <CardBody>
          <p>View a summary of all your customers over the last month.</p>
        </CardBody>
      </>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div>
      {['small', 'medium', 'large'].map(size => (
        <Card key={size} size={size as CardSize}>
          <CardHeader>
            <CardTitle>{size}</CardTitle>
          </CardHeader>
          <CardBody>
            <p>size = {size}</p>
            <p>{dummy.content}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <div>
            <CardTitle>{dummy.title}</CardTitle>
            <p>header description</p>
          </div>
        </CardHeader>
        <CardImage src={dummy.imgSrc} alt={dummy.imgAlt} />
        <CardBody>
          <p>{dummy.content}</p>
        </CardBody>
        <CardFooter>
          <Button color="secondary" onClick={() => alert('Clicked!')}>
            button
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const WithImageInBody: Story = {
  args: {
    children: (
      <>
        <CardBody>
          <CardImage src={dummy.imgSrc} alt={dummy.imgAlt} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <CardTitle>Living room Sofa</CardTitle>
            <p>
              This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for
              people who love a chic design with a sprinkle of vintage design.
            </p>
            <p>$450</p>
          </div>
        </CardBody>
        <CardFooter>
          <div style={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
            <Button stretch onClick={() => alert('Clicked!')}>
              Buy now
            </Button>
            <Button variant="ghost" stretch onClick={() => alert('Clicked!')}>
              Add to cart
            </Button>
          </div>
        </CardFooter>
      </>
    ),
  },
};

export const Advanced: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <Avatar src={dummy.avatarSrc} name={dummy.avatarName} circle />
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <CardTitle>Segun Adebayo</CardTitle>
            <p>Creator, Chakra UI</p>
          </div>
          <Button variant="ghost" color="secondary" size="small" onClick={() => alert('더보기 클릭')}>
            더보기
          </Button>
        </CardHeader>
        <CardBody>
          <p>
            With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer
            to be just as excited as the designer to create a screen.
          </p>
        </CardBody>
        <CardImage src={dummy.imgSrc} alt={dummy.imgAlt} />
        <CardFooter>
          <Button variant="ghost" color="primary" prefix="👍🏻" stretch onClick={() => alert('like 클릭')}>
            Like
          </Button>
          <Button variant="ghost" color="primary" prefix="💬" stretch onClick={() => alert('comment 클릭')}>
            Comment
          </Button>
          <Button variant="ghost" color="primary" prefix="🏹" stretch onClick={() => alert('share 클릭')}>
            Share
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const HorizontalCard: Story = {
  args: {
    direction: 'row',
    children: (
      <>
        <CardImage maxW="200px" src={dummy.imgSrc} alt={dummy.imgAlt} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <CardBody>
            <CardTitle>The perfect latte</CardTitle>
            <p>Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</p>
          </CardBody>
          <CardFooter>
            <div style={{ minWidth: '40%' }}>
              <Button stretch onClick={() => alert('buy latte 클릭')}>
                Buy Latte
              </Button>
            </div>
          </CardFooter>
        </div>
      </>
    ),
  },
};
