import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import thema from '../../../../thema';
import { GlobalStyle } from '../../../../thema/GlobalStyle';

export default function WebsiteGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={thema}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};