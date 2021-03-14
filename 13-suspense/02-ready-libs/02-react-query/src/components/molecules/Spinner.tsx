import { VFC } from 'react';
import { Loader, SemanticSIZES } from 'semantic-ui-react';

import './Spinner.css';

const Spinner: VFC<{ size?: SemanticSIZES }> = ({ size = 'medium' }) => (
  <div className="spinner">
    <Loader size={size} inline="centered" active>
      読み込み中...
    </Loader>
  </div>
);

export default Spinner;
