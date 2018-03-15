import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css'

const colors = {
  white: '#fff',
  peach: '#ffe6ce',
  purple: '#2f1c46',
  red: '#c7485b',
};

const theme = {
  primaryBg: colors.peach,
  secondaryBg: colors.white,
  accentBg: colors.red,
  primaryText: colors.purple,
  secondaryText: colors.red,
  fonts: {
    default: "'adelle', sans-serif",
    sans: "'alternate-gothic-no-3-d', sans-serif",
  },
  flexboxgrid: {
    // Defaults
    gridSize: 12, // rem
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
};

const StyledTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 0 1em;
  color: ${props => props.primaryText};
  font-family: ${props => props.theme.fonts.default};
  background-color: ${props => props.theme.primaryBg};

  .content { flex: 1 }

  h1, h2, h3, h4 {
    font-weight: 100;
    font-family: ${props => props.theme.fonts.sans};
  }
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledTemplateWrapper>
      <Helmet titleTemplate="Demuxed | %s" title="The community for engineers working with video.">
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="description" content="The conference and community for developers working with video" />
        <meta name="keywords" content="engineering, video, software, conference" />
      </Helmet>
      <Header />

      <div className="content">
        {children()}
      </div>

      <Footer />
    </StyledTemplateWrapper>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper