import React from 'react';
import propTypes from 'prop-types';

const Page = ({ children }) => <>{children}</>;

Page.propTypes = {
  children: propTypes.node.isRequired,
};

export default Page;
