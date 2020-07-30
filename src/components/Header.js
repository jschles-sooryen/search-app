import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import logo from '../logo.svg';

const styles = (theme) => ({
  root: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: theme.palette.primary.main,
    textAlign: 'center',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  logoContainer: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(4),
    borderRadius: '100%',
  },
  logo: {
    'height': '100px',
    'pointerEvents': 'none',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: '$App-logo-spin infinite 20s linear',
    },
  },
  headerText: {
    fontSize: 28,
  },
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    }
  },
});

const Header = (props) => {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <div className={classes.logoContainer}>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
      <h1 className={classes.headerText}>React Search App</h1>
    </header>
  )
};

export default withStyles(styles)(Header);