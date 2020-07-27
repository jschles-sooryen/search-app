import React from 'react';
import { render } from '@testing-library/react';
import LoadingIndicator from '../../components/LoadingIndicator';
import TestProvider from '../../config/TestProvider';

describe('<LoadingIndicator />', () => {
  it('Renders successfully without error', () => {
    const loadingIndicator = render(
      <TestProvider>
        <LoadingIndicator />
      </TestProvider>
    );
    expect(loadingIndicator.container).toBeInTheDocument();
  });
});