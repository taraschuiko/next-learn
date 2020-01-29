import React from 'react';
import PropTypes, { object } from 'prop-types';
import Axios from 'axios';
import Layout from '../layouts/Layout';
import PostLink from '../components/PostLink';

const Index = ({ shows }) => (
  <Layout>
    <h1>Shows</h1>
    <ul>
      {
        shows.map((show) => (
          <li key={show.id}><PostLink title={show.name} id={show.id} /></li>
        ))
      }
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const shows = await Axios.get('https://api.tvmaze.com/search/shows?q=batman')
    .then((r) => r.data.map((data) => data.show));

  return {
    shows,
  };
};

Index.propTypes = {
  shows: PropTypes.arrayOf(object),
};

Index.defaultProps = {
  shows: [],
};

export default Index;
