import { VFC } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const HomeButton: VFC<{ redirectToHome?: () => void }> = ({
  redirectToHome = () => undefined,
}) => (
  <Button basic color="grey" onClick={redirectToHome}>
    <Icon name="home" />
    ホームへ
  </Button>
);

export default HomeButton;
