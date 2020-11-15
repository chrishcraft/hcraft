import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { ThemeProvider } from "emotion-theming"
import Sidebar from "./sidebar"
import "../styles/reset.css"
import "../styles/typography.css"

const theme = {
  border: "4px solid #333",
  borderRadius: "1.5em",
  greyLine: "1px solid #ccc",
  black: "#333",
  grey: "#ccc",
  blue: "#466ee7",
  width: "700px",
}

const Page = styled.div`
  min-height: 96vh;
  border: ${p => p.theme.border};
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom-right-radius: ${p => p.theme.borderRadius};
  border-top-right-radius: ${p => p.theme.borderRadius};
  main {
    margin: 2em;
    flex-grow: 2;
    a {
      text-decoration: none;
      border-bottom: 1px solid #ccc;
      color: ${p => p.theme.blue};
      &:hover {
        color: #333;
      }
    }
    /* for markdown pages */
    & > p,
    & > ul,
    & > ol {
      padding: 0.25em 2em 0;
      margin: 1em auto;
      max-width: ${p => p.theme.width};
      @media (max-width: 700px) {
        padding: 0;
      }
    }
  }
  .slider {
    max-width: ${p => p.theme.width};
    margin: 0 auto;
  }
  .content {
    max-width: ${p => p.theme.width};
    margin: 0 auto;
    p {
      margin: 1em 0;
    }
  }
  .preview {
    a:first-of-type:hover h1 {
      color: ${p => p.theme.blue};
    }
    h1 {
      border-bottom: ${p => p.theme.border};
      border-width: 3px;
      color: ${p => p.theme.black};
      line-height: 1;
      font-size: 175%;
      margin-bottom: 0;
    }
  }
  .gatsby-resp-image-link {
    border: none;
    margin-top: 2rem;
  }
  .small-text,
  .gatsby-resp-image-figcaption {
    color: #666;
    font-size: 80%;
  }
  .gatsby-resp-image-figcaption {
    text-align: right;
    margin-bottom: 2rem;
  }
  .small-link {
    font-size: 80%;
    line-height: 1.2;
  }
  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 650px) {
    border: none;
    main {
      margin: 0.5em;
    }
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Page>
      <main>{children}</main>
      <Sidebar />
    </Page>
    <footer
      css={css`
        margin: -1.4em 0 0 1.45em;
        font-size: 66%;
        text-transform: uppercase;
        a {
          text-decoration: none;
          color: #999;
          &:hover {
            color: #333;
          }
        }
        @media (max-width: 650px) {
          display: flex;
          justify-content: flex-end;
          margin-right: 0.5em;
        }
      `}
    >
      <a
        href="http://www.corinawong.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Site by
      </a>
    </footer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
