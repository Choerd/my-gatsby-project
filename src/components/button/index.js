import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ButtonStyle = styled.div`
  color: red;
`;

const Button = ({ as = 'primary', ...props }) => (
  <ButtonStyle as={as} {...props} />
);

Button.propTypes = {
  as: PropTypes.string.isRequired,
};

export default Button;
