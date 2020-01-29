import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const linkStyle = {
  display: 'block',
  marginBottom: 4,
};

const PostLink = ({ title }) => (
  <Link href={`/post?title=${title}`}>
    <a href="/" style={linkStyle}>{title}</a>
  </Link>
);

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostLink;
