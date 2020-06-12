import React from 'react';

const SummaryText: React.FunctionComponent = ({ children }) => {
  console.log(children);

  return <div className="story">{children}</div>;
};

export default SummaryText;
