import { VFC } from 'react';
import { useParams } from 'react-router';

import Members from 'components/pages/Members';

const EnhancedMembers: VFC = () => {
  const { orgCode = '' } = useParams();

  return <Members orgCode={orgCode} />;
};

export default EnhancedMembers;
