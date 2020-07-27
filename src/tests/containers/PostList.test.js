import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostList from '../../containers/PostList';
import Search from '../../containers/Search';
import TestProvider from '../../config/TestProvider';

describe('<PostList />', () => {
  it('Renders successfully without error', () => {
    const postList = render(
      <TestProvider>
        <PostList />
      </TestProvider>
    );
    expect(postList.container).toBeTruthy();
  });

  it('Shows number of results that match number of posts returned from API', () => {
    const { getByText } = render(
      <TestProvider>
        <PostList />
      </TestProvider>
    );
    const resultsElement = getByText(/Results/i);
    expect(resultsElement.textContent).toMatch('10 Results');
  });

  it('Shows number of results that match number of posts that meet search query conditions', () => {
    const { getByTestId, getByText } = render(
      <TestProvider>
        <Search />
        <PostList />
      </TestProvider>
    );
    const search = getByTestId('search-input');
    fireEvent.change(search, {
      target: { value: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
    });
    const resultsElement = getByText(/Results/i);
    expect(resultsElement.textContent).toMatch('1 Results');
  });
});