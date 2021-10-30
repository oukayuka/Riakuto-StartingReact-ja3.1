import { ErrorInfo, PureComponent, ReactNode } from 'react';
import { HTTPError } from 'ky';
import { Message } from 'semantic-ui-react';

type StatusMessages = { [status: number]: string };
type Props = { statusMessages?: StatusMessages };
type State = { hasError: boolean; error: Error | null };
const DEFAULT_MESSAGES: StatusMessages = { 0: 'サーバエラーです' };

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError = (error: Error): State => ({
    hasError: true,
    error,
  });

  componentDidCatch = (error: Error, info: ErrorInfo): void => {
    console.error(error, info); // eslint-disable-line no-console
  };

  render = (): ReactNode => {
    const { children, statusMessages = {} } = this.props;
    const { hasError, error } = this.state;
    const messages = { ...DEFAULT_MESSAGES, ...statusMessages };

    if (hasError) {
      const statusCode = (error as HTTPError)?.response?.status;

      if (statusCode && Object.keys(messages).includes(String(statusCode))) {
        return <Message warning>{messages[statusCode]}</Message>;
      }

      return <Message error>{messages[0]}</Message>;
    }

    return children;
  };
}

export default ErrorBoundary;
