import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';

import * as actions from '../store/actions/postActions';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchPosts();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
