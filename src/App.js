import React from 'react';

import Header from './components/Header'
import PostList from './components/PostList'

import './styles/app.css'
import './styles/header.css'
import './styles/posts.css'

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
