import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, OutlinedInput } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    marginBottom: 32,
  },
  postTitle: {
    padding: 8,
    fontSize: 16,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
  },
  postTitleInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editTitleInput: {
    width: '95%',
    backgroundColor: '#fff',
  },
  editTitleInputRoot: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  postBody: {
    padding: 8,
    fontSize: 16,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
  error: {
    color: 'red',
  },
});

const Post = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const { classes, onSave, post } = props;
  const { title: currentTitle, body } = post;

  const onEditClick = () => {
    setIsEditing(true);
    setTitle(currentTitle);
  };

  const onSaveClick = () => {
    const { id } = props.post;
    if (!title.trim()) {
      setError('Error: Please enter a title.');
    } else {
      if (currentTitle !== title) {
        onSave({ id, title });
      }
      setIsEditing(false);
      setTitle('');
      setError('');
    }
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const titleContent = isEditing ? (
    <div className={classes.postTitleInner}>
      <OutlinedInput
        className={classes.editTitleInput}
        value={title} 
        onChange={handleChange} 
        variant="outlined"
        classes={{
          input: classes.editTitleInputRoot,
        }}
        inputProps={{
          'data-testid': 'edit-input',
        }}
      />
      <Button 
        variant="contained" 
        onClick={onSaveClick}
        data-testid="save"
      >
        Save
      </Button>
    </div>
  ) : (
    <div className={classes.postTitleInner}>
      <div>{currentTitle}</div>
      <Button 
        variant="contained" 
        onClick={onEditClick}
        data-testid="edit"
      >
        Edit
      </Button>
    </div>
  );

  return (
    <div className={classes.root} data-testid="post-">
      {error && <p className={classes.error} data-testid="post-error">{error}</p>}
      <div className={classes.postTitle}>
        {titleContent}
      </div>
      <div className={classes.postBody}>
        {body}
      </div>
    </div>
  );
};

export default withStyles(styles)(Post);