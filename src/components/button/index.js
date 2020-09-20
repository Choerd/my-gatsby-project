import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const ButtonStyle = styled.div`
  ${tw`bg-blue text-red`}
`;

const Button = ({ as = 'primary', ...props }) => (
  <ButtonStyle as={as} {...props} />
);

export default Button;

Button.propTypes = {
  as: PropTypes.string.isRequired,
};
