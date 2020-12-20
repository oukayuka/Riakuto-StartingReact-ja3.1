import { FC } from 'react';
import { Container, Label, SemanticCOLORS } from 'semantic-ui-react';

import './ColorfulBeads.css';

// equivalent to https://lodash.com/docs/#range
// see also https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from
const range = (n: number): number[] =>
  n < 0 ? [] : Array.from(Array(n), (_, i) => i);

const colors: SemanticCOLORS[] = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

const ColorfulBeads: FC<{ count?: number }> = ({ count = 0 }) => (
  <Container className="beads-box">
    {range(count).map((n: number) => (
      <Label circular color={colors[n % colors.length]} key={n} />
    ))}
  </Container>
);

export default ColorfulBeads;
