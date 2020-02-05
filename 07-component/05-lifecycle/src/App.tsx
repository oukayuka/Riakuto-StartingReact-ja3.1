import React, { Component } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import './App.css';

const LIMIT = 60;

type AppState = {
  timeLeft: number;
};

class App extends Component<{}, AppState> {
  timerId?: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    this.state = { timeLeft: LIMIT };
  }

  reset = (): void => {
    this.setState({ timeLeft: LIMIT });
  };

  tick = (): void => {
    this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));
  };

  componentDidMount = (): void => {
    this.timerId = setInterval(this.tick, 1000);
  };

  componentDidUpdate = (): void => {
    const { timeLeft } = this.state;
    if (timeLeft === 0) this.reset();
  };

  componentWillUnmount = (): void => {
    clearInterval(this.timerId as NodeJS.Timer);
  };

  render(): JSX.Element {
    const { timeLeft } = this.state;

    return (
      <div className="container">
        <header>
          <h1>タイマー</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>time</Statistic.Label>
            <Statistic.Value>{timeLeft}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <Button color="red" fluid onClick={this.reset}>
              <Icon name="redo" />
              Reset
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
