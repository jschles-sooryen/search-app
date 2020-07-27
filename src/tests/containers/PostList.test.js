import React from 'react';
import { render } from '@testing-library/react';
import PostList from '../../containers/PostList';
import TestProvider from '../../config/TestProvider';

describe('<PostList />', () => {
  it('Renders successfully without error', () => {
    const postList = render(
      <TestProvider>
        <PostList />
      </TestProvider>
    );
    expect(postList.container).toBeInTheDocument();
  });
});