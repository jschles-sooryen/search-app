import React, { Component } from 'react';
import { connect } from  'react-redux';
import { shape, bool, string, array, oneOfType } from 'prop-types';
import { bindActionCreators } from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';

import Post from '../components/Post';
import LoadingIndicator from '../components/LoadingIndicator';

import { updatePost, fetchPosts } from '../store/actions/postActions';

const styles = (theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  postInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noResults: {
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '32px 0',
    fontSize: 20,
  },
  error: {
    color: 'red',
  },
  buttonLink: {
    background: 'none !important',
    border: 'none',
    padding: '0 !important',
    color: 'red',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: 20,
    fontWeight: 'bold',
    outline: 'none',
  },
});

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  onSave = (post) => {
    this.props.updatePost(post);
  };

  onRetry = () => {
    this.props.fetchPosts();
  };

  filteredPosts = () => {
    const { posts, search } = this.props;
    if (posts.error || !search.trim()) {
      return posts;
    }
    return posts.filter((post) => post.title.includes(search));
  };

  render() {
    const { classes, loading } = this.props;
    const posts = this.filteredPosts();
    const resultAmount = posts.length;

    const content = loading ? (
      <LoadingIndicator />
    ) : posts.error ? (
      <div className={classes.noResults}>
        <p className={classes.error}>
          Error: Unable to fetch posts.
          &nbsp;
          <button 
            className={classes.buttonLink} 
            onClick={this.onRetry}
          >
            Click Here
          </button>
          &nbsp;
          to try again.
        </p>
      </div>
    ) : posts.length ? (
      posts.map((post) => {
        const { id } = post;
        return (
          <Post 
            key={id}
            post={post}
            onSave={this.onSave}
          />
        );
      })
    ) : (
      <div className={classes.noResults}>
        <p>No Posts Found.</p>
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.postsInfo}>
          <p>{resultAmount} Results</p>
        </div>
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    posts: state.posts, 
    loading: state.loading,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    updatePost: bindActionCreators(updatePost, dispatch),
  };
};

PostList.propTypes = {
  posts: oneOfType([
    shape({
      error: bool.isRequired,
    }), 
    array,
  ]).isRequired,
  loading: bool.isRequired,
  search: string,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostList));