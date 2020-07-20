import React, { FC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

import Spinner from 'components/molecules/Spinner';
import { CharactersData } from 'data/characters';

type CharactersListProps = CharactersData & { isLoading?: boolean };

const CharactersList: FC<CharactersListProps> = ({
  school = '校名不明',
  players = [],
  isLoading = false,
}) => (
  <>
    <Header as="h2">{school}</Header>
    {isLoading ? (
      <Spinner />
    ) : (
      <Item.Group>
        {players.map(player => (
          <Item key={player.id}>
            <Icon name="user circle" size="huge" />
            <Item.Content>
              <Item.Header>{player.name}</Item.Header>
              <Item.Meta>{player.age}歳</Item.Meta>
              <Item.Meta>
                {player.height ? player.height : '???'}
                cm
              </Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    )}
  </>
);

export default CharactersList;
