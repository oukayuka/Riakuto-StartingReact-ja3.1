import React, {
  FC,
  FormEvent,
  Suspense,
  SuspenseConfig,
  SuspenseList,
  useTransition,
  useState,
} from 'react';
import { Button, Divider, Input, Menu } from 'semantic-ui-react';
import capitalize from 'lodash/capitalize';

import ErrorBoundary from 'ErrorBoundary';
import Spinner from 'components/molecules/Spinner';
import OrgInfo from 'containers/oraganisms/OrgInfo';
import MemberList from 'containers/oraganisms/MemberList';
import './Members.css';

const SUSPENSE_CONFIG: SuspenseConfig = {
  timeoutMs: 1000,
  busyDelayMs: 100,
  busyMinDurationMs: 700,
};

type Props = {
  orgCodes: string[];
  prefetch?: (orgCode: string) => void;
};

const Members: FC<Props> = ({ orgCodes = [], prefetch = () => undefined }) => {
  const [orgCode, setOrgCode] = useState('');
  const [input, setInput] = useState('');
  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);

  const menuItems = orgCodes.map((code) => ({
    key: code,
    name: capitalize(code),
    onClick: () => {
      setInput('');

      if (orgCode) {
        startTransition(() => {
          setOrgCode(code);
        });
      } else {
        setOrgCode(code);
      }
    },
    onMouseOver: () => {
      prefetch(code);
    },
    active: code === orgCode,
  }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setOrgCode(input.toLowerCase());
  };

  return (
    <>
      <header className="app-header">
        <h1>会社メンバーリスト</h1>
      </header>
      <form className="search-form" onSubmit={handleSubmit}>
        <Input
          placeholder="組織コードを入力..."
          type="text"
          value={input}
          onChange={(_, data) => {
            setInput(data.value);
          }}
        />
        <Button type="submit" disabled={isPending} primary>
          検索
        </Button>
      </form>
      <Menu items={menuItems} text />
      <Divider />
      <div className={isPending ? 'loading' : ''}>
        <ErrorBoundary
          unfoundMessage={`‘${orgCode}’ という会社は見つかりません`}
          key={orgCode}
        >
          <SuspenseList revealOrder="forwards">
            <Suspense fallback={<Spinner size="small" />}>
              <OrgInfo orgCode={orgCode} />
            </Suspense>
            <Suspense fallback={<Spinner size="large" />}>
              <MemberList orgCode={orgCode} />
            </Suspense>
          </SuspenseList>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Members;
