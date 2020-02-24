import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import { CharacterDirectory } from 'data/characters';

const SchoolList: FC<{ data: CharacterDirectory }> = ({ data }) => (
  <>
    <h2>登場人物</h2>
    <List as="ul">
      {Object.keys(data).map(schoolCode => (
        <List.Item as="li" key={schoolCode}>
          <Link to={`/characters/${schoolCode}`}>
            {data[schoolCode].school}
          </Link>
        </List.Item>
      ))}
    </List>
  </>
);

export default SchoolList;
