import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  text: string
};

const Errors = ({ text }) => <span style={{ color: 'red' }}>{text}</span>;

export default Errors;
