import React from 'react';

type Props = { name: string; times?: number };

const Greets: React.FunctionComponent<Props> = ({ name, times = 1 }) => (
  <>
    {Array(times).map((_) => (
      <p>Hello, {name}!</p>
    ))}
  </>
);

export default Greets;
