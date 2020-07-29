import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
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
    const { getByPlaceholderText, getByText } = render(
      <TestProvider>
        <Search />
        <PostList />
      </TestProvider>
    );
    const search = getByPlaceholderText('Search Posts By Title:');
    fireEvent.change(search, {
      target: { value: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
    });
    const resultsElement = getByText(/Results/i);
    expect(resultsElement.textContent).toMatch('1 Results');
  });

  it('Shows error upon fetch posts API failure', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject());
    const { getByText } = render(
      <TestProvider>
        <PostList />
      </TestProvider>
    );
    const error = await waitForElement(() => getByText(/Error: Unable to fetch posts./i));
    expect(error).toBeTruthy();
  });

  it('Shows "No Posts Found." text when no posts are returned from the API or search query', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([])
      })
    );
    const { getByText } = render(
      <TestProvider>
        <PostList />
      </TestProvider>
    );
    const noResults = await waitForElement(() => getByText('No Posts Found.'));
    expect(noResults).toBeTruthy();
  });
});