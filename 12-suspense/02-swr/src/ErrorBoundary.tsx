import React, { ErrorInfo, PureComponent, ReactNode } from 'react';
import ky from 'ky';
import { Message } from 'semantic-ui-react';

type Props = {
  unfoundMessage?: string;
  onError?: () => void;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null, // eslint-disable-line react/no-unused-state
    };
  }

  static getDerivedStateFromError = (error: Error): State => ({
    hasError: true,
    error,
  });

  componentDidCatch = (error: Error, info: ErrorInfo): void => {
    const { onError } = this.props;
    if (onError) onError();

    console.error(error, info); // eslint-disable-line no-console
  };

  render = (): JSX.Element | ReactNode => {
    const { children, unfoundMessage = 'Not Found' } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      const httpError = error as ky.HTTPError;

      if (httpError?.response?.status === 404) {
        return <Message warning>{unfoundMessage}</Message>;
      }

      return <Message error>サーバエラーです</Message>;
    }

    return children;
  };
}

export default ErrorBoundary;
