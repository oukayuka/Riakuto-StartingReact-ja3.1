import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Icon } from 'semantic-ui-react';

type HomeButtonProps = Partial<Pick<RouteComponentProps, 'history'>>;

const HomeButton: FC<HomeButtonProps> = ({ history }) => (
  <Button
    basic
    color="grey"
    onClick={() => {
      if (history) history.push('/');
    }}
  >
    <Icon name="home" />
    ホームへ
  </Button>
);

export default HomeButton;
