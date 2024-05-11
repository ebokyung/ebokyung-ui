import { ReactNode, useState } from 'react';
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
  const [expanded, setExpanded] = useState<unknown[]>([]);

  const singleToggle = id => {
    if (expanded.includes(id)) setExpanded([]);
    else setExpanded([id]);
  };

  const multipleToggle = id => {
    if (expanded.includes(id)) setExpanded(prev => prev.filter(itemId => itemId !== id));
    else setExpanded(prev => prev.concat(id));
  };

  const toggle = allowMultiple ? multipleToggle : singleToggle;
  return (
    <Accordion>
      {data.map(item => (
        <Accordion.Item key={item.id}>
          <Accordion.Trigger expanded={expanded.includes(item.id)} onClick={() => toggle(item.id)}>
            {item.title}
          </Accordion.Trigger>
          <Accordion.Panel expanded={expanded.includes(item.id)}>{item.content}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
