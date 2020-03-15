import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const HomeButton: FC = () => (
  <Button basic color="grey" as={Link} to="/">
    <Icon name="home" />
    ホームへ
  </Button>
);

export default HomeButton;
