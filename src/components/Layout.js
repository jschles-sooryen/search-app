import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  root: {
    margin: '0 auto',
    maxWidth: 1440,
    padding: 16,
  }
});

const Layout = (props) => {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default withStyles(styles)(Layout);