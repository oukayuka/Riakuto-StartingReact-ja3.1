import { VFC } from 'react';

import Home from 'components/pages/Home';
import orgCodes from 'data/org-codes';

const EnhancedHome: VFC = () => <Home orgCodes={orgCodes} />;

export default EnhancedHome;
