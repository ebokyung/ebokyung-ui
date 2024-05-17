import { ReactNode } from 'react';
import { Accordion } from './accordion';

type item = {
  id: string;
  title: ReactNode;
  content: ReactNode;
};

type MyAccordionProps = {
  data: item[];
  allowMultiple?: boolean;
};

export const MyAccordion = ({ data, allowMultiple = false }: MyAccordionProps) => {
  return (
    <Accordion allowMultiple={allowMultiple}>
      {data.map(item => (
        <Accordion.Item key={item.id} id={item.id}>
          <Accordion.Trigger>{item.title}</Accordion.Trigger>
          <Accordion.Panel>{item.content}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
