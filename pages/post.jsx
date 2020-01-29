import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../layouts/Layout';

export default () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>Content</p>
    </Layout>
  );
};
