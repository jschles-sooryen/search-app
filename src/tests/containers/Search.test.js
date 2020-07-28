import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import PostList from '../../containers/PostList';
import Search from '../../containers/Search';
import TestProvider from '../../config/TestProvider';

describe('<Search />', () => {
  it('Renders successfully without error', () => {
    const search = render(
      <TestProvider>
        <Search />
      </TestProvider>
    );
    expect(search.container).toBeTruthy();
  });

  it('Filters posts shown on the screen when a search query is entered', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TestProvider>
        <Search />
        <PostList />
      </TestProvider>
    );
    const search = getByTestId('search-input');
    fireEvent.change(search, {
      target: { value: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
    });
    const posts = await waitForElement(() => getAllByTestId('post-', { exact: false })); 
    expect(posts.length).toBe(1);
  });
});