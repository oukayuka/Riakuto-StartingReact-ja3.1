import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Divider } from 'semantic-ui-react';

import CharactersList from 'components/organisms/CharactersList';
import HomeButton from 'containers/molecules/HomeButton';
import { CharactersData } from 'data/characters';

type CharactersProps = CharactersData & { isLoading?: boolean };

const Characters: FC<CharactersProps> = ({
  school,
  players,
  isLoading = false,
}) => (
  <>
    <Helmet>
      <title>登場人物一覧 | {school}</title>
    </Helmet>
    <header>
      <h1>『ハイキュー!!』 登場人物</h1>
    </header>
    <CharactersList school={school} players={players} isLoading={isLoading} />
    <Divider hidden />
    <HomeButton />
  </>
);

export default Characters;
