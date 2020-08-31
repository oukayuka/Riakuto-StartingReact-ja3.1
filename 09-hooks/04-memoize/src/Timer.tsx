import React, { FC, useEffect, useMemo, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import { getPrimes } from 'utils/math-tool';
import './Timer.css';

type TimerProps = {
  limit: number;
};

const Timer: FC<TimerProps> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const primes = useMemo(() => getPrimes(limit), [limit]);
  const reset = () => setTimeLeft(limit);
  const tick = () => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit);
  }, [timeLeft, limit]);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value
          className={primes.includes(timeLeft) ? 'prime-number' : undefined}
        >
          {timeLeft}
        </Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
          Reset
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Timer;
