import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const linkStyle = {
  display: 'block',
  marginBottom: 4,
};

const PostLink = ({ id }) => (
  <Link href="/p/[id]" as={`/p/${id}`}>
    <a href="/" style={linkStyle}>{id}</a>
  </Link>
);

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PostLink;
