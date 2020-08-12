import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import capitalize from 'lodash/capitalize';
import { List } from 'semantic-ui-react';

import './Home.css';

const Home: FC<{ orgCodes: string[] }> = ({ orgCodes = [] }) => (
  <>
    <header className="app-header">
      <h1>会社一覧</h1>
    </header>
    <List celled relaxed>
      {orgCodes.map((orgCode) => (
        <List.Item className="list-item" key={orgCode}>
          <List.Icon name="users" size="large" verticalAlign="middle" />
          <List.Content>
            <Link to={`/${orgCode}/members`}>
              {capitalize(orgCode)} のメンバー
            </Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </>
);

export default Home;
