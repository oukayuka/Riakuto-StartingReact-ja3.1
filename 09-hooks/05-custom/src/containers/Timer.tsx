import React, { FC } from 'react';
import useTimer from 'hooks/use-timer';
import Timer from 'components/Timer';

const EnhancedTimer: FC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, isPrime, reset] = useTimer(limit);

  return <Timer timeLeft={timeLeft} isPrime={isPrime} reset={reset} />;
};

export default EnhancedTimer;
