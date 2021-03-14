import { VFC } from 'react';

import SchoolList from 'components/organisms/SchoolList';
import { charactersData } from 'data/characters';

const EnhancedSchoolList: VFC = () => {
  const schools = Object.keys(charactersData).map((code) => ({
    code,
    name: charactersData[code].school,
  }));

  return <SchoolList schools={schools} />;
};

export default EnhancedSchoolList;
