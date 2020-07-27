import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../../components/Layout';
import TestProvider from '../../config/TestProvider';

describe('<Layout />', () => {
  it('Renders successfully without error', () => {
    const layout = render(
      <TestProvider>
        <Layout />
      </TestProvider>
    );
    expect(layout.container).toBeTruthy();
  });
});