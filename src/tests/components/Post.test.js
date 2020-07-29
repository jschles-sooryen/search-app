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
    const { getByRole } = render(
      <TestProvider>
        <Post post={{ id: 1, title: 'Post Title', body: 'Post Body' }} onSave={onSave} />
      </TestProvider>
    );
    const editButton = getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);
    const editInput = getByRole('textbox');
    expect(editInput.value).toMatch('Post Title');
    fireEvent.change(editInput, {
      target: { value: 'New Post Title' },
    });
    const saveButton = getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith({ id: 1, title: 'New Post Title' });
  });

  it('Shows an error if user tries to update a post title with an empty space', () => {
    const { getByRole, getByText } = render(
      <TestProvider>
        <Post post={{ id: 1, title: 'Post Title', body: 'Post Body' }} onSave={() => {}} />
      </TestProvider>
    );
    const editButton = getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);
    const editInput = getByRole('textbox');
    fireEvent.change(editInput, {
      target: { value: ' ' },
    });
    const saveButton = getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);
    const error = getByText('Error: Please enter a title.');
    expect(error).toBeTruthy();
  });
});