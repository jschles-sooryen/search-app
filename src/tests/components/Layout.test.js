import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Layout from '../../components/Layout';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<Layout />', () => {
  let layout;
  beforeAll(() => {
    layout = render(
      <TestProvider>
        <Layout />
      </TestProvider>
    );
  });

  it('Renders successfully without error', () => {
    expect(layout.container).toBeInTheDocument();
  });
});