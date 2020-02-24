import React, { FC } from 'react';

import SchoolList from 'components/organisms/SchoolList';
import { characterDirectory } from 'data/characters';

const EnhancedSchoolList: FC = () => <SchoolList data={characterDirectory} />;

export default EnhancedSchoolList;
