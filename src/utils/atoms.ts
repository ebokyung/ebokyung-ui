import { omit, pick } from 'lodash';
import { cx } from './cx';
import { sprinkles, type Sprinkles, elementResets } from '@/styles';

// atoms: Sprinkles와 CSS resets 결합
export interface Atoms extends Sprinkles {
  reset?: keyof JSX.IntrinsicElements;
  className?: string | string[];
}

export function atoms(atoms: Atoms) {
  const { reset, className, ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  return cx(sprinklesClassNames, className, reset ? elementResets[reset] : null);
}

// extractAtoms: 프로퍼티 목록을 원자 속성과 기타 속성으로 분할
const keys = Array.from(sprinkles.properties.keys());
export const extractAtoms = <P extends object>(props: P) => [pick(props, keys), omit(props, keys)];
