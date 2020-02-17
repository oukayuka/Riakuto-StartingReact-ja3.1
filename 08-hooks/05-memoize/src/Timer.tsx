import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import { getPrimes } from 'utils/math-tool';
import './Timer.css';

type TimerProps = {
  limit: number;
};

const Timer: FC<TimerProps> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const primes = useMemo(() => getPrimes(limit), [limit]);
  const timerId = useRef<NodeJS.Timeout>();
  const reset = useCallback(() => setTimeLeft(limit), [limit]);
  const tick = (): void => setTimeLeft(prevTime => prevTime - 1);

  useEffect(() => {
    const clearTimerIfExist = (): void => {
      if (timerId.current) clearInterval(timerId.current);
    };
    reset();
    clearTimerIfExist();
    timerId.current = setInterval(tick, 1000);

    return clearTimerIfExist;
  }, [limit, reset]);

  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [reset, timeLeft]);

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
