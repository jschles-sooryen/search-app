import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  root: {
    marginBottom: 32,
  },
  postTitle: {
    padding: 8,
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
  },
  postBody: {
    padding: 8,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
});

const Post = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');

  const { classes, onSave, post } = props;
  const { title: currentTitle, body } = post;

  const onEditClick = () => {
    setIsEditing(true);
    setTitle(currentTitle);
  };

  const onSaveClick = () => {
    const { id } = props.post;
    onSave(id, title, body);
    setIsEditing(false);
    setTitle('');
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const titleContent = isEditing ? (
    <div className={classes.postTitleInner}>
      <input className={classes.editTitleInput} type="text" value={title} onChange={handleChange} />
      <button onClick={onSaveClick}>Save</button>
    </div>
  ) : (
    <div className={classes.postTitleInner}>
      <div>{currentTitle}</div>
      <button onClick={onEditClick}>Edit</button>
    </div>
  );

  return (
    <div className={classes.root}>
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