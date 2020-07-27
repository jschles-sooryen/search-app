import React from 'react';

import Header from './components/Header';
import Layout from './components/Layout';
import PostList from './containers/PostList';
import Search from './containers/Search';

const App = () => (
  <div>
    <Header />
    <Layout>
      <Search />
      <PostList />
    </Layout>
  </div>
);

export default App;
