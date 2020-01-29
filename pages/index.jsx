import React from 'react';
import Layout from '../layouts/Layout';
import PostLink from '../components/PostLink';

export default () => (
  <Layout>
    <h1>Posts</h1>
    <PostLink id="Post about Next.js" />
    <PostLink id="Post about React" />
    <PostLink id="Learning Redux" />
  </Layout>
);
