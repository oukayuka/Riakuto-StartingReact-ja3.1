import React, { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const HomeButton: FC<{ redirectToHome?: () => void }> = ({
  redirectToHome = () => undefined,
}) => (
  <Button basic color="grey" onClick={redirectToHome}>
    <Icon name="home" />
    ホームへ
  </Button>
);

export default HomeButton;
