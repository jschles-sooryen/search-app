import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../../components/Header';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<Header />', () => {
  let header;
  beforeAll(() => {
    header = render(
      <TestProvider>
        <Header />
      </TestProvider>
    );
  });

  it('Renders successfully without error', () => {
    expect(header.container).toBeInTheDocument();
  });
});