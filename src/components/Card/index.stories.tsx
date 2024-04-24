import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, CardImage, Button } from '@/components';
import { Avatar } from '@/components/common';
import { CardSize } from './card/card.types';
import { FooterJustify } from './card-footer/card-footer.types';

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
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = () => (
  <Card>
    <CardHeader>
      <CardTitle> Customer dashboard</CardTitle>
    </CardHeader>
    <CardBody>
      <p>View a summary of all your customers over the last month.</p>
    </CardBody>
  </Card>
);

// export const Variants = () => {
//   // <Stack spacing="4">
//   return ['elevated', 'outline', 'filled', 'unstyled'].map(variant => (
//     <Card key={variant} variant={variant}>
//       <CardHeader>
//         <Heading size="md"> {variant}</Heading>
//       </CardHeader>
//       <CardBody>
//         <p>variant = {variant}</p>
//       </CardBody>
//     </Card>
//   ));
//   // </Stack>
// };

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
        <CardFooter justify="start">
          <Button color="secondary">button</Button>
        </CardFooter>
      </>
    ),
  },
};

export const WithImageInBody = () => (
  <Card>
    {/* <Card maxW="sm"> */}
    <CardBody>
      <CardImage
        src={dummy.imgSrc}
        alt={dummy.imgAlt}
        // borderRadius="lg"
      />
      {/* <Stack mt="6" spacing="3"> */}
      <div>
        <CardTitle>Living room Sofa</CardTitle>
        <p>
          This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people
          who love a chic design with a sprinkle of vintage design.
        </p>
        <p>$450</p>
      </div>
      {/* </Stack> */}
    </CardBody>
    {/* <Divider /> */}
    <CardFooter>
      {/* <ButtonGroup spacing="2"> */}
      <Button variant="solid" stretch={true}>
        Buy now
      </Button>
      <Button variant="ghost" stretch={true}>
        Add to cart
      </Button>
      {/* </ButtonGroup> */}
    </CardFooter>
  </Card>
);

export const FooterContentJustify: Story = {
  render: () => (
    <div>
      {['start', 'end', 'spaceBetween', 'center'].map(justify => (
        <Card size="small">
          <CardHeader>
            <CardTitle> Customer dashboard</CardTitle>
          </CardHeader>
          <CardBody>
            <p>View a summary of all your customers over the last month.</p>
          </CardBody>
          <CardFooter justify={justify as FooterJustify}>
            <Button>here</Button>
            <Button>here</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
};

// export const HorizontalCard = () => (
//   <Card direction="row" overflow="hidden" variant="outline">
//     <Image
//       objectFit="cover"
//       maxW="200px"
//       src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       alt="Caffe Latte"
//     />
//     <Stack>
//       <CardBody>
//         <Heading size="md">The perfect latte</Heading>
//         <p py="2">Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</p>
//       </CardBody>
//       <CardFooter>
//         <Button variant="solid" colorScheme="blue">
//           Buy Latte
//         </Button>
//       </CardFooter>
//     </Stack>
//   </Card>
// );

export const Advanced = () => (
  <Card>
    <CardHeader>
      {/* <HStack spacing="4"> */}
      <div>
        <Avatar src={dummy.avatarSrc} name={dummy.avatarName} />
        <div>
          <CardTitle>Segun Adebayo</CardTitle>
          <p>Creator, Chakra UI</p>
        </div>
        <Button variant="ghost" color="secondary" size="small" prefix="⠇" />
      </div>
      {/* </HStack> */}
    </CardHeader>
    <CardBody>
      <p>
        With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be
        just as excited as the designer to create a screen.
      </p>
    </CardBody>
    <CardImage
      // objectFit="cover"
      src={dummy.imgSrc}
      alt={dummy.imgAlt}
    />

    <CardFooter justify="spaceBetween">
      <Button variant="ghost" color="primary" size="small" prefix="👍🏻" stretch>
        Like
      </Button>
      <Button variant="ghost" color="primary" size="small" prefix="💬" stretch>
        Comment
      </Button>
      <Button variant="ghost" color="primary" size="small" prefix="🏹" stretch>
        Share
      </Button>
    </CardFooter>
  </Card>
);
