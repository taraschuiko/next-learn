import React from 'react';
import Header from '../components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #000',
};

export default (props) => (
  <div style={layoutStyle}>
    <Header />
    {this.props.children}
  </div>
);
