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
    const { getByPlaceholderText, getAllByRole } = render(
      <TestProvider>
        <Search />
        <PostList />
      </TestProvider>
    );
    const search = getByPlaceholderText('Search Posts By Title:');
    fireEvent.change(search, {
      target: { value: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
    });
    const posts = await waitForElement(() => getAllByRole('listitem')); 
    expect(posts.length).toBe(1);
  });

  it('Shows potential search results in an autocomplete dropdown when text is entered', async () => {
    const { getByPlaceholderText, getAllByRole } = render(
      <TestProvider>
        <Search />
        <PostList />
      </TestProvider>
    );
    const search = getByPlaceholderText('Search Posts By Title:');
    fireEvent.change(search, {
      target: { value: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
    });
    fireEvent.focus(search);
    const options = await waitForElement(() => getAllByRole('menuitem'));
    expect(options.length).toBe(1);
  });
});