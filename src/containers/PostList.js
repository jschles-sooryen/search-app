import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';

import Post from '../components/Post';
import LoadingIndicator from '../components/LoadingIndicator';

import * as postActions from '../store/actions/postActions';

class PostList extends Component {
  componentDidMount() {
    this.props.actions.fetchPosts();
  }

  onSave = (post) => {
    this.props.actions.updatePost(post);
  };

  render() {
    const { posts, loading } = this.props;

    const content = loading ? (
      <LoadingIndicator />
    ) : (
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
    );

    return (
      <div>
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(postActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);