import React, { FC } from 'react';

import Home from 'components/pages/Home';
import orgCodes from 'data/org-codes';

const EnhancedHome: FC = () => <Home orgCodes={orgCodes} />;

export default EnhancedHome;
