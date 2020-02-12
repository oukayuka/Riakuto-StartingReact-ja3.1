import React, { FC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './Counter.css';

type CounterProps = {
  max: number;
};

const Counter: FC<CounterProps> = ({ max }) => {
  const [count, setCount] = useState(0);
  const reset = (): void => setCount(0);
  const increment = (): void => setCount(c => (c < max ? c + 1 : 0));

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>
          {count}
          <span className="denominator"> / {max}</span>
        </Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={reset}>
            Reset
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;
