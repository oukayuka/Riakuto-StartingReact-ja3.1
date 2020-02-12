import React, { Component } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

import './App.css';

type AppState = {
  count: number;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  reset(): void {
    this.setState({ count: 0 });
  }

  increment(): void {
    this.setState({ count: this.state.count + 1});
    setTimeout(() => this.setState({ count: this.state.count + 1}), 1000);
  }

  render(): JSX.Element {
    const { count } = this.state;

    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={() => this.reset()}>
                Reset
              </Button>
              <Button color="green" onClick={() => this.increment()}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
