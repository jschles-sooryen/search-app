import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import Layout from '../components/Layout';
import Post from '../components/Post';
import LoadingIndicator from '../components/LoadingIndicator';

import * as actions from '../store/actions/postActions';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchPosts();
  }

  render() {
    const { posts, loading } = this.props;

    const postContent = loading ? (
      <LoadingIndicator />
    ) : (
      posts.map((post) => (
        <Post 
          key={post.id}
          post={post}
          onSave={() => {}}
        />
      ))
    );

    return (
      <div>
        <Header />
        <Layout>
          {postContent}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
