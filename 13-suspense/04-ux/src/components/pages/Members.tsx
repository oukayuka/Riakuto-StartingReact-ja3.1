import {
  VFC,
  FormEvent,
  Suspense,
  SuspenseList,
  useRef,
  useState,
  useTransition,
} from 'react';
import { Button, Divider, Input, Menu } from 'semantic-ui-react';
import capitalize from 'lodash/capitalize';

import ErrorBoundary from 'ErrorBoundary';
import Spinner from 'components/molecules/Spinner';
import OrgInfo from 'containers/oraganisms/OrgInfo';
import MemberList from 'containers/oraganisms/MemberList';
import './Members.css';

type Props = {
  orgCodeList: string[];
  prefetch?: (orgCode: string) => void;
};

const Members: VFC<Props> = ({ orgCodeList, prefetch = () => undefined }) => {
  const [orgCode, setOrgCode] = useState('');
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const ebKey = useRef(0);

  const menuItems = orgCodeList.map((code) => ({
    key: code,
    name: capitalize(code),
    onClick: () => {
      setInput('');

      if (orgCode) {
        startTransition(() => setOrgCode(code));
      } else {
        setOrgCode(code);
      }
    },
    onMouseOver: () => prefetch(code),
    active: code === orgCode,
  }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setOrgCode(input.toLowerCase().trim());
  };

  return (
    <>
      <header className="app-header">
        <h1>組織メンバーリスト</h1>
      </header>
      <form className="search-form" onSubmit={handleSubmit}>
        <Input
          placeholder="組織コードを入力..."
          type="text"
          value={input}
          onChange={(_, data) => setInput(data.value)}
        />
        <Button type="submit" disabled={isPending} primary>
          検索
        </Button>
      </form>
      <Menu items={menuItems} text />
      <Divider />
      <div className={isPending ? 'loading' : ''}>
        <ErrorBoundary
          statusMessages={{
            404: `‘${orgCode}’ というコードの組織は見つかりません`,
          }}
          onError={() => {
            ebKey.current += 1;
          }}
          key={ebKey.current}
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
