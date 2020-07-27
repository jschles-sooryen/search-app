import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../../containers/Search';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<Search />', () => {
  it('Renders successfully without error', () => {
    const search = render(
      <TestProvider>
        <Search />
      </TestProvider>
    );
    expect(search.container).toBeInTheDocument();
  });
});