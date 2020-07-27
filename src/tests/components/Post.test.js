import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Post from '../../components/Post';
import TestProvider from '../../config/TestProvider';

afterEach(cleanup);

describe('<Post />', () => {
  it('Renders successfully without error', () => {
    const post = render(
      <TestProvider>
        <Post post={{ id: 1, title: 'Post Title', body: 'Post Body' }} />
      </TestProvider>
    );
    expect(post.container).toBeInTheDocument();
  });
});