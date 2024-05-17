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
        <Accordion.Item key={item.id}>
          <Accordion.Trigger id={item.id}>{item.title}</Accordion.Trigger>
          <Accordion.Panel id={item.id}>{item.content}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
