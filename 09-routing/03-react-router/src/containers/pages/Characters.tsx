import React, { FC } from 'react';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import { parse } from 'query-string';

import Characters from 'components/pages/Characters';
import { characterDirectory } from 'data/characters';

const EnhancedCharacters: FC = () => {
  const { schoolCode } = useParams();
  const schoolCodeList = Object.keys(characterDirectory);
  const { search } = useLocation();
  const isLoading = !!parse(search).loading;

  if (schoolCode && schoolCodeList.includes(schoolCode)) {
    const { school, players } = characterDirectory[schoolCode];

    return (
      <Characters school={school} players={players} isLoading={isLoading} />
    );
  }

  return <Redirect to="/" />;
};

export default EnhancedCharacters;
