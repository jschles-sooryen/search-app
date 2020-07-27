import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../../components/Header';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<Header />', () => {
  it('Renders successfully without error', () => {
    const header = render(
      <TestProvider>
        <Header />
      </TestProvider>
    );
    expect(header.container).toBeInTheDocument();
  });
});