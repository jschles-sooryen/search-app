import React, { useState, memo } from 'react';
import { shape, func, string, number } from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button, OutlinedInput } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  postTitle: {
    padding: theme.spacing(1),
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
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  editTitleInputRoot: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  postBody: {
    padding: theme.spacing(1),
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  postButtonDesktop: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  mobileButtonContainer: {
    padding: theme.spacing(1),
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderTop: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  error: {
    color: 'red',
  },
});

const Post = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('xs'));

  const { classes, onSave, post } = props;
  const { title: currentTitle, body, id } = post;

  const onEditClick = () => {
    setIsEditing(true);
    setTitle(currentTitle);
  };

  const onSaveClick = () => {
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
          role: 'textbox',
        }}
      />
      <Button 
        variant="contained"
        className={classes.postButtonDesktop}
        onClick={onSaveClick}
        role="button"
        name="save"
      >
        Save
      </Button>
    </div>
  ) : (
    <div className={classes.postTitleInner}>
      <div>{currentTitle}</div>
      <Button 
        variant="contained" 
        className={classes.postButtonDesktop}
        onClick={onEditClick}
        role="button"
        name="edit"
      >
        Edit
      </Button>
    </div>
  );

  const mobileButton = isEditing ? (
    <Button 
      variant="contained"
      fullWidth
      onClick={onSaveClick}
      role="button"
      name="save"
    >
      Save
    </Button>
  ) : (
    <Button 
      variant="contained"
      fullWidth
      onClick={onEditClick}
      role="button"
      name="edit"
    >
      Edit Title
    </Button>
  );

  const mobileContent = isMobile ? (
    <div className={classes.mobileButtonContainer}>
      {mobileButton}
    </div>
  ) : null;

  return (
    <div className={classes.root} role="listitem">
      {error && <p className={classes.error}>{error}</p>}
      <div className={classes.postTitle}>
        {titleContent}
      </div>
      <div className={classes.postBody}>
        {body}
      </div>
      {mobileContent}
    </div>
  );
};

Post.propTypes = {
  post: shape({
    id: number,
    userId: number,
    title: string,
    body: string,
  }).isRequired,
  onSave: func.isRequired,
};

export default withStyles(styles)(memo(Post));