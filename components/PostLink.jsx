import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const linkStyle = {
  display: 'flex',
  marginBottom: 4,
};

const PostLink = ({ title, id }) => (
  <Link href="/show/[id]" as={`/show/${id}`}>
    <a href="/" style={linkStyle}>{title}</a>
  </Link>
);

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default PostLink;
