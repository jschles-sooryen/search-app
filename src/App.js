import React from 'react';

import Header from './components/Header';
import Layout from './components/Layout';
import PostList from './containers/PostList';

const App = () => (
  <div>
    <Header />
    <Layout>
      <PostList />
    </Layout>
  </div>
);

export default App;
