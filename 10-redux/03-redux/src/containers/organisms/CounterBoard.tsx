import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, decrement, increment } from 'actions';
import { CounterState } from 'reducer';
import Counter from 'components/organisms/CounterBoard';

const EnhancedCounter: FC = () => {
  const count = useSelector<CounterState, number>(state => state.count);
  const dispatch = useDispatch();

  return (
    <Counter
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounter;
