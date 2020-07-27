import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { OutlinedInput } from '@material-ui/core';

import * as searchActions from '../store/actions/searchActions';

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: theme.palette.primary.main,
    marginTop: 16,
    marginBottom: 32,
    margin: '0 auto',
    width: '50%',
    fontWeight: 'bold',
  },
  searchTitle: {
    flexBasis: '20%',
    width: '20%',
  },
});

class Search extends Component {
  handleChange = (event) => {
    const query = event.target.value;
    this.props.actions.search(query);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <p className={classes.searchTitle}>Search Posts:</p>
        <OutlinedInput 
          type="text"
          fullWidth
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(searchActions, dispatch) };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Search));