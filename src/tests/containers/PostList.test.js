import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PostList from '../../containers/PostList';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<PostList />', () => {
  let postList;
  beforeAll(() => {
    postList = render(
      <TestProvider>
        <PostList />
      </TestProvider>
    );
  });

  it('Renders successfully without error', () => {
    expect(postList.container).toBeInTheDocument();
  });
});