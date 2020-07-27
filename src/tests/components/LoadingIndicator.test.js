import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LoadingIndicator from '../../components/LoadingIndicator';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<LoadingIndicator />', () => {
  let loadingIndicator;
  beforeAll(() => {
    loadingIndicator = render(
      <TestProvider>
        <LoadingIndicator />
      </TestProvider>
    );
  });

  it('Renders successfully without error', () => {
    expect(loadingIndicator.container).toBeInTheDocument();
  });
});