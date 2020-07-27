import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../../containers/Search';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<Search />', () => {
  let search;
  beforeAll(() => {
    search = render(
      <TestProvider>
        <Search />
      </TestProvider>
    );
  });

  it('Renders successfully without error', () => {
    expect(search.container).toBeInTheDocument();
  });
});