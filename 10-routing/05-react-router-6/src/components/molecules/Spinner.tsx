import { VFC } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

import './Spinner.css';

const Spinner: VFC = () => (
  <Segment className="spinner">
    <Dimmer active inverted>
      <Loader inverted={false}>読み込み中...</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
