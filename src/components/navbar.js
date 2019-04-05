import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { kebabCase } from "lodash-es";

const Navbar = ({ siteTitle, tagLine }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-grey-darkest font-sans fixed pin-l pin-r pin-t py-3 px-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <Link
          to="/"
          className="font-semibold text-xl tracking-tight text-white no-underline"
        >
          {siteTitle}{" "}
          <span className="pl-6 text-teal-light italic hidden md:inline-block">
            {tagLine}
          </span>
        </Link>
      </div>
    </nav>
  );
};

const NavBarLink = ({ section }) => (
  <a
    href={`#${kebabCase(section)}`}
    className="block mt-4 pr-3 text-lg lg:inline-block lg:mt-0 text-teal align-bottom hover:text-white no-underline"
  >
    {section}
  </a>
);

NavBarLink.propType = {
  section: PropTypes.string
};

Navbar.propTypes = {
  siteTitle: PropTypes.string
};

Navbar.defaultProps = {
  siteTitle: ``
};

export default Navbar;
