import React, { Component } from 'react';
import { shape, bool, string, array, oneOfType } from 'prop-types';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { OutlinedInput } from '@material-ui/core';
import Autocomplete from 'react-autocomplete';

import { search as searchAction } from '../store/actions/searchActions';

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
  searchInput: {
    borderColor: theme.palette.primary.main,
    outline: 'none',
    borderRadius: 5,
    fontSize: 16,
  },
  autocompleteMenu: {
    borderRadius: '3px',
    background: '#fff',
    padding: '2px 0',
    fontSize: '90%',
    position: 'absolute',
    top: '100%',
    left: 0,
    overflow: 'auto',
    width: '100%',
    maxHeight: '200px',
  },
  autocompleteOption: {
    width: '100%',
    padding: '3px 5px',
  },
});

// There is no way provided by Autocomplete to render
// a custom wrapper, so custom styles need to be applied this way
const autocompleteWrapperStyle = {
  display: 'block',
  width: '100%',
  position: 'relative',
};

class Search extends Component {
  handleChange = (event) => {
    // Autocomplete onSelect passes the value directly and not through an event
    const query = event.target ? event.target.value : event;
    this.props.searchQuery(query);
  };

  getAutocompleteOptions = () => {
    const { posts, search } = this.props;
    if (search.trim() && !posts.error) {
      return posts.filter((post) => post.title.includes(search));
    }
    return [];
  };

  renderAutocompleteMenu = (items) => {
    const { classes } = this.props;
    return (
      <div children={items} className={classes.autocompleteMenu} />
    );
  };

  renderAutocompleteOption = (item) => {
    const { classes } = this.props;
    return (
      <div 
        key={item.title} 
        className={classes.autocompleteOption}
        role="menuitem"
      >
        {item.title}
      </div>
    );
  };

  render() {
    const { classes, search } = this.props;
    const autocompleteOptions = this.getAutocompleteOptions();

    return (
      <div className={classes.root}>
        <Autocomplete 
          items={autocompleteOptions}
          getItemValue={(item) => item.title}
          renderItem={(item) => this.renderAutocompleteOption(item)}
          renderInput={({ ref, ...props }) => (
            <OutlinedInput
              type="text"
              inputRef={ref}
              fullWidth
              inputProps={{
                placeholder: 'Search Posts By Title:'
              }}
              {...props}
            />
          )}
          renderMenu={(items) => this.renderAutocompleteMenu(items)}
          wrapperStyle={autocompleteWrapperStyle}
          value={search}
          onChange={this.handleChange}
          onSelect={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { searchQuery: bindActionCreators(searchAction, dispatch) };
};

Search.propTypes = {
  posts: oneOfType([
    shape({
      error: bool.isRequired,
    }), 
    array,
  ]).isRequired,
  search: string,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Search));