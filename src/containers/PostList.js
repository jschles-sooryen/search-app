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

  filteredPosts = () => {
    const { posts, search } = this.props;
    if (search) {
      return posts.filter((post) => post.title.includes(search));
    }
    return posts;
  };

  render() {
    const { loading } = this.props;
    const posts = this.filteredPosts();

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
  return { 
    posts: state.posts, 
    loading: state.loading,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(postActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);