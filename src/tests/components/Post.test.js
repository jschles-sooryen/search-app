import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Post from '../../components/Post';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<Post />', () => {
  let post;
  beforeAll(() => {
    post = render(
      <TestProvider>
        <Post post={{ id: 1, title: 'Post Title', body: 'Post Body' }} />
      </TestProvider>
    );
  });

  it('Renders successfully without error', () => {
    expect(post.container).toBeInTheDocument();
  });
});