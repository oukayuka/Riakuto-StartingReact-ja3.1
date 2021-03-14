import { VFC } from 'react';
import { useRecoilState } from 'recoil';

import { counterState } from 'features/counter';
import ColorfulBeads from 'components/molecules/ColorfulBeads';

const EnhancedColorfulBeads: VFC<{ count?: number }> = () => {
  const [count, _] = useRecoilState(counterState);

  return <ColorfulBeads count={count} />;
};

export default EnhancedColorfulBeads;
