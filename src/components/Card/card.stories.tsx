import type { Meta, StoryObj } from '@storybook/react';
import { Button, Avatar } from '@/components';
import { Card } from '.';
import { CardStylesProps } from './card.css';

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
  // render: props => {
  //   const { size, direction, ...rest } = props;
  //   return <Card size={size} direction={direction} {...rest}></Card>;
  // },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: props => {
    return (
      <Card {...props}>
        <Card.Header>
          <Card.Title>Customer dashboard</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>View a summary of all your customers over the last month.</p>
        </Card.Body>
      </Card>
    );
  },
};

export const WithHeaderDescription: Story = {
  render: props => {
    return (
      <Card {...props}>
        <Card.Header>
          <div>
            <Card.Title>Customer dashboard</Card.Title>
            <p>header description</p>
          </div>
        </Card.Header>
        <Card.Body>
          <p>View a summary of all your customers over the last month.</p>
        </Card.Body>
      </Card>
    );
  },
};

export const WithFooter: Story = {
  render: props => {
    return (
      <Card {...props}>
        <Card.Header>
          <Card.Title>Customer dashboard</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>View a summary of all your customers over the last month.</p>
        </Card.Body>
        <Card.Footer>
          <Button color="secondary" onClick={() => alert('Clicked!')}>
            button
          </Button>
        </Card.Footer>
      </Card>
    );
  },
};

export const WithImage: Story = {
  render: props => {
    return (
      <Card {...props}>
        <Card.Header>
          <Card.Title>{dummy.title}</Card.Title>
        </Card.Header>
        <Card.Image src={dummy.imgSrc} alt={dummy.imgAlt} />
        <Card.Body>
          <p>{dummy.content}</p>
        </Card.Body>
        <Card.Footer>
          <Button color="secondary" onClick={() => alert('Clicked!')}>
            button
          </Button>
        </Card.Footer>
      </Card>
    );
  },
};

export const WithImageInBody: Story = {
  render: props => {
    return (
      <Card {...props}>
        <Card.Body>
          <Card.Image src={dummy.imgSrc} alt={dummy.imgAlt} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Card.Title>Living room Sofa</Card.Title>
            <p>
              This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for
              people who love a chic design with a sprinkle of vintage design.
            </p>
            <p>$450</p>
          </div>
        </Card.Body>
        <Card.Footer>
          <div style={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
            <Button stretch onClick={() => alert('Clicked!')}>
              Buy now
            </Button>
            <Button variant="ghost" stretch onClick={() => alert('Clicked!')}>
              Add to cart
            </Button>
          </div>
        </Card.Footer>
      </Card>
    );
  },
};

export const Sizes: Story = {
  render: props => (
    <>
      {['small', 'medium', 'large'].map(size => (
        // TODO: type?
        <Card key={size} size={size as CardStylesProps['size']} {...props}>
          <Card.Header>
            <Card.Title>title</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>size = {size}</p>
            <p>{dummy.content}</p>
          </Card.Body>
        </Card>
      ))}
    </>
  ),
};

export const Advanced: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Avatar>
            <img src={dummy.avatarSrc} alt={dummy.avatarName} />
          </Avatar>
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <Card.Title>Segun Adebayo</Card.Title>
            <p>Creator, Chakra UI</p>
          </div>
          <Button variant="ghost" color="secondary" size="small" onClick={() => alert('더보기 클릭')}>
            더보기
          </Button>
        </Card.Header>
        <Card.Body>
          <p>
            With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer
            to be just as excited as the designer to create a screen.
          </p>
        </Card.Body>
        <Card.Image src={dummy.imgSrc} alt={dummy.imgAlt} />
        <Card.Footer>
          <Button variant="ghost" color="primary" prefix="👍🏻" stretch onClick={() => alert('like 클릭')}>
            Like
          </Button>
          <Button variant="ghost" color="primary" prefix="💬" stretch onClick={() => alert('comment 클릭')}>
            Comment
          </Button>
          <Button variant="ghost" color="primary" prefix="🏹" stretch onClick={() => alert('share 클릭')}>
            Share
          </Button>
        </Card.Footer>
      </>
    ),
  },
};

export const HorizontalCard: Story = {
  args: {
    direction: 'row',
    children: (
      <>
        <Card.Image maxW="200px" src={dummy.imgSrc} alt={dummy.imgAlt} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Card.Body>
            <Card.Title>The perfect latte</Card.Title>
            <p>Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</p>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => alert('buy latte 클릭')}>Buy Latte</Button>
          </Card.Footer>
        </div>
      </>
    ),
  },
};
