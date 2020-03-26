import React, { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import capitalize from 'lodash/capitalize';
import { Divider } from 'semantic-ui-react';

import Spinner from 'components/molecules/Spinner';
import HomeButton from 'components/molecules/HomeButton';
import MemberList from 'containers/oraganisms/MemberList';

const Members: FC<{ orgCode: string }> = ({ orgCode = 'UnknownCompany' }) => {
  const title = `${capitalize(orgCode)} の開発メンバー`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className="app-header">
        <h1>{title}</h1>
      </header>
      <Suspense fallback={<Spinner />}>
        <MemberList orgCode={orgCode} />
      </Suspense>
      <Divider hidden />
      <HomeButton />
    </>
  );
};

export default Members;
