import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from 'react-query-devtools';

const Devtools = () =>
  process.env.NODE_ENV === 'development' ? (
    <ReactQueryDevtools initialIsOpen={false} />
  ) : (
    <div />
  );

export default Devtools;
