import React, { FC, useReducer } from 'react';
import CounterWidget from 'components/templates/CounterWidget';

const CounterActionType = {
  added: 'counter/added',
  decremented: 'counter/decremented',
  incremented: 'counter/incremented',
} as const;

type ValueOf<T> = T[keyof T];
type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
  payload?: number;
};

type CounterState = { count: number };

const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case CounterActionType.added:
      return {
        ...state,
        count: state.count + (action.payload ?? 0),
      };
    case CounterActionType.decremented:
      return {
        ...state,
        count: state.count - 1,
      };
    case CounterActionType.incremented:
      return {
        ...state,
        count: state.count + 1,
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};

const add = (payload: number): CounterAction => ({
  type: CounterActionType.added,
  payload,
});
const decrement = (): CounterAction => ({
  type: CounterActionType.decremented,
});
const increment = (): CounterAction => ({
  type: CounterActionType.incremented,
});

const EnhancedCounterWidget: FC<{ initialCount?: number }> = ({
  initialCount = 0,
}) => {
  const [state, dispatch] = useReducer(
    counterReducer,
    initialCount,
    (count: number): CounterState => ({ count }),
  );

  return (
    <CounterWidget
      count={state.count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounterWidget;
