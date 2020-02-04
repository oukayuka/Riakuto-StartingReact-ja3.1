import React, { FC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export type Character = {
  id: number;
  name: string;
  age: number;
  height?: number;
};

type CharacterListProps = {
  school: string;
  characters: Character[];
};

const CharacterList: FC<CharacterListProps> = props => {
  const { school, characters } = props;

  return (
    <>
      <Header as="h2">{school}</Header>
      <Item.Group>
        {characters.map(character => (
          <Item>
            <Icon name="user circle" size="huge" />
            <Item.Content>
              <Item.Header>{character.name}</Item.Header>
              <Item.Meta>{character.age}歳</Item.Meta>
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
