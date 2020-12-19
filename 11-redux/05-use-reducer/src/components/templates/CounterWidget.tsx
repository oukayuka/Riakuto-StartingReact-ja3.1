import { FC } from 'react';
import ColorfulBeads from 'components/molecules/ColorfulBeads';
import CounterBoard, {
  CounterBoardProps,
} from 'components/organisms/CounterBoard';

const CounterWidget: FC<Required<CounterBoardProps>> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => (
  <>
    <CounterBoard {...{ count, add, decrement, increment }} />
    <ColorfulBeads count={count} />
  </>
);

export default CounterWidget;
