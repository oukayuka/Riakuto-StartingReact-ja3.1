import React, { FC } from 'react';
import ColorfulBeads from 'components/molecules/ColorfulBeads';
import CounterBoard from 'components/organisms/CounterBoard';

type CounterWidgetProps = {
  count: number;
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
};

const CounterWidget: FC<CounterWidgetProps> = ({
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
