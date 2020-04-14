import React, { FC } from 'react';
import { useParams } from 'react-router';

import Members from 'components/pages/Members';

const EnhancedMembers: FC = () => {
  const { orgCode = '' } = useParams();

  return <Members orgCode={orgCode} />;
};

export default EnhancedMembers;
