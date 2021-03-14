import { VFC } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import CharactersList from 'components/organisms/CharactersList';
import { Character } from 'data/characters';

type Props = {
  school: string;
  characters: Character[];
  isLoading?: boolean;
};

const SchoolCharacters: VFC<Props> = ({
  school,
  characters,
  isLoading = false,
}) => (
  <>
    <Helmet>
      <title>登場人物一覧 | {school}</title>
    </Helmet>
    <Header as="h2">{school}</Header>
    <CharactersList characters={characters} isLoading={isLoading} />
  </>
);

export default SchoolCharacters;
