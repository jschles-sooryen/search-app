import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Post from '../../components/Post';
import TestProvider from '../../config/TestProvider';

describe('<Post />', () => {
  it('Renders successfully without error', () => {
    const post = render(
      <TestProvider>
        <Post post={{ id: 1, title: 'Post Title', body: 'Post Body' }} onSave={() => {}} />
      </TestProvider>
    );
    expect(post.container).toBeTruthy();
  });

  it('Shows input populated with current post title when EDIT button is clicked, and calls onSave upon clicking SAVE with edited title', () => {
    const onSave = jest.fn();
    const { getByTestId } = render(
      <TestProvider>
        <Post post={{ id: 1, title: 'Post Title', body: 'Post Body' }} onSave={onSave} />
      </TestProvider>
    );
    const editButton = getByTestId('edit');
    fireEvent.click(editButton);
    const editInput = getByTestId('edit-input');
    expect(editInput.value).toMatch('Post Title');
    fireEvent.change(editInput, {
      target: { value: 'New Post Title' },
    });
    const saveButton = getByTestId('save');
    fireEvent.click(saveButton);
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith({ id: 1, title: 'New Post Title' });
  });

  it('Shows an error if user tries to update a post title with an empty space', () => {
    const { getByTestId } = render(
      <TestProvider>
        <Post post={{ id: 1, title: 'Post Title', body: 'Post Body' }} onSave={() => {}} />
      </TestProvider>
    );
    const editButton = getByTestId('edit');
    fireEvent.click(editButton);
    const editInput = getByTestId('edit-input');
    fireEvent.change(editInput, {
      target: { value: ' ' },
    });
    const saveButton = getByTestId('save');
    fireEvent.click(saveButton);
    const error = getByTestId('post-error');
    expect(error.textContent).toMatch('Error: Please enter a title.');
  });
});