import React from 'react';
import Layout from '../layouts/Layout';
import PostLink from '../components/PostLink';

export default () => (
  <Layout>
    <h1>Posts</h1>
    <PostLink title="Post about Next.js" />
    <PostLink title="Post about React" />
    <PostLink title="Learning Redux" />
  </Layout>
);
