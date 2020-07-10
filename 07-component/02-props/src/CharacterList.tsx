import React, { FC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type Props = {
  school: string;
  characters: Character[];
};

const CharacterList: FC<Props> = (props) => {
  const { school, characters } = props;

  return (
    <>
      <Header as="h2">{school}</Header>
      <Item.Group>
        {characters.map((character) => (
          <Item key={character.id}>
            <Icon name="user circle" size="huge" />
            <Item.Content>
              <Item.Header>{character.name}</Item.Header>
              <Item.Meta>{character.grade}年生</Item.Meta>
              <Item.Meta>
                {character.height ? character.height : '???'}
                cm
              </Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
};

export default CharacterList;
