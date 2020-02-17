import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getPrimes } from 'utils/math-tool';

const useTimer = (limit: number): [number, boolean, () => void] => {
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

  return [timeLeft, primes.includes(timeLeft), reset];
};

export default useTimer;
