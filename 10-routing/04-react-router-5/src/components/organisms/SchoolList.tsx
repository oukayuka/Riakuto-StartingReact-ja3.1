import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

type School = {
  code: string;
  name: string;
};

const SchoolList: FC<{ schools: School[] }> = ({ schools }) => (
  <>
    <h2>登場人物</h2>
    <List as="ul">
      {schools.map((school) => (
        <List.Item as="li" key={school.code}>
          <Link to={`/characters/${school.code}`}>{school.name}</Link>
        </List.Item>
      ))}
      <List.Item as="li" key="all">
        <Link to="/characters">全校の選手（身長順）</Link>
      </List.Item>
    </List>
  </>
);

export default SchoolList;
