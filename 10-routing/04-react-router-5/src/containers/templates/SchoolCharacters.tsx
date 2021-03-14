import { VFC } from 'react';
import { Redirect, useLocation, useParams } from 'react-router-dom';

import SchoolCharacters from 'components/templates/SchoolCharacters';
import { charactersData } from 'data/characters';

const EnhancedSchoolCharacters: VFC = () => {
  const { schoolCode } = useParams<{ schoolCode: string }>();
  const schoolCodeList = Object.keys(charactersData);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const isLoading = !!queryParams.get('loading');

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

  return <Redirect to="/" />;
};

export default EnhancedSchoolCharacters;
