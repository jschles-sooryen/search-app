import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Layout from '../../components/Layout';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<Layout />', () => {
  it('Renders successfully without error', () => {
    const layout = render(
      <TestProvider>
        <Layout />
      </TestProvider>
    );
    expect(layout.container).toBeInTheDocument();
  });
});