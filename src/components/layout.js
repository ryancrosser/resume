/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Navbar from "./navbar";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div className="container mx-auto pt-16 px-4">
          <main className="font-sans">{children}</main>
          <footer className="float-right">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              href="https://www.gatsbyjs.org"
              className="text-teal-darker hover:text-teal-light no-underline hover:underline"
            >
              Gatsby
            </a>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
