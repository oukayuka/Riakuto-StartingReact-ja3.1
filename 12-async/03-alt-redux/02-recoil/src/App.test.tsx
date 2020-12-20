import React from 'react';
import { RecoilRoot } from 'recoil';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <RecoilRoot>
      <App />
    </RecoilRoot>,
  );
  const textElement = getByText(/ビーズカウンター/i);
  expect(textElement).toBeInTheDocument();
});
