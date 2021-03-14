import { VFC } from 'react';
import { useRecoilState } from 'recoil';

import { counterState } from 'features/counter';
import CounterBoard from 'components/organisms/CounterBoard';

const EnhancedCounterBoard: VFC = () => {
  const [count, setCount] = useRecoilState(counterState);
  const add = (amount: number) => setCount((c) => c + amount);
  const decrement = () => setCount((c) => c - 1);
  const increment = () => setCount((c) => c + 1);

  return <CounterBoard {...{ count, add, decrement, increment }} />;
};

export default EnhancedCounterBoard;
