import { VFC } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

import SchoolCharacters from 'components/templates/SchoolCharacters';
import { charactersData } from 'data/characters';

const EnhancedSchoolCharacters: VFC = () => {
  const { schoolCode = '' } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const isLoading = !!queryParams.get('loading');
  const schoolCodeList = Object.keys(charactersData);

  if (schoolCodeList.includes(schoolCode)) {
    const { school, players } = charactersData[schoolCode];

    return (
      <SchoolCharacters
        school={school}
        characters={players}
        isLoading={isLoading}
      />
    );
  }

  return <Navigate to="/" replace />;
};

export default EnhancedSchoolCharacters;
