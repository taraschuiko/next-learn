import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Layout from '../../layouts/Layout';

const Show = ({ data }) => (
  <Layout>
    <h1>{data.name}</h1>
    <img src={data.image.medium} alt={data.name} />
    <p>{data.summary.replace(/<[^>]*>?/gm, '')}</p>
  </Layout>
);

Show.getInitialProps = async (context) => {
  const show = await Axios.get(`https://api.tvmaze.com/shows/${context.query.id}`);

  return {
    data: show.data,
  };
};

Show.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Show;
