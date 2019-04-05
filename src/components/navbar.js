import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { kebabCase } from "lodash-es";

//the class you are making your component from
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-grey-darkest font-sans fixed pin-l pin-r pin-t py-3 px-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Link
            to="/"
            className="font-semibold text-xl tracking-tight text-white no-underline"
          >
            {this.props.siteTitle}
          </Link>
        </div>

        <div className="block xl:hidden">
          <button
            onClick={this.toggleButton}
            className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={
            (this.state.isMenuOpen ? "block" : "hidden") +
            " w-full flex-grow xl:flex xl:items-center xl:w-auto"
          }
        >
          <div className="text-sm xl:flex-grow">
            <NavBarLink section="Profile" />
            <NavBarLink section="Experience" />
            <NavBarLink section="Education" />
            <NavBarLink section="Certificates" />
            <NavBarLink section="Skills" />
            <NavBarLink section="Tools &amp; Technologies" />
            <NavBarLink section="Projects" />
            <NavBarLink section="Awards" />
          </div>
        </div>
      </nav>

      //     <div className={this.state.isMenuOpen ? "lg:hidden" : "block"}>
      //       <button
      //         onClick={this.toggleButton}
      //         className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
      //       >
      //         <svg
      //           className="fill-current h-3 w-3"
      //           viewBox="0 0 20 20"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <title>Menu</title>
      //           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      //         </svg>
      //       </button>
      //     </div>
      //   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      //     <div className="text-sm lg:flex-grow">
      //       <NavBarLink section="Profile" />
      //       <NavBarLink section="Experience" />
      //       <NavBarLink section="Education" />
      //       <NavBarLink section="Certificates" />
      //       <NavBarLink section="Skills" />
      //       <NavBarLink section="Tools &amp; Technologies" />
      //       <NavBarLink section="Projects" />
      //       <NavBarLink section="Awards" />
      //     </div>
      //   </div>

      //   <nav className="flex items-center justify-between flex-wrap bg-grey-darkest font-sans fixed pin-l pin-r pin-t py-3 px-6">
      //     <div className="flex items-center flex-no-shrink text-white mr-6">
      //       <Link
      //         to="/"
      //         className="font-semibold text-xl tracking-tight text-white no-underline"
      //       >
      //         {this.props.siteTitle}
      //         {this.state.isMenuOpen}
      //       </Link>
      //     </div>
      //     <div className={this.state.isMenuOpen ? "lg:hidden" : "block"}>
      //       <button
      //         onClick={this.toggleButton}
      //         className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
      //       >
      //         <svg
      //           className="fill-current h-3 w-3"
      //           viewBox="0 0 20 20"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <title>Menu</title>
      //           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      //         </svg>
      //       </button>
      //     </div>
      //     <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      //       <div className="text-sm lg:flex-grow">
      //         <NavBarLink section="Profile" />
      //         <NavBarLink section="Experience" />
      //         <NavBarLink section="Education" />
      //         <NavBarLink section="Certificates" />
      //         <NavBarLink section="Skills" />
      //         <NavBarLink section="Tools &amp; Technologies" />
      //         <NavBarLink section="Projects" />
      //         <NavBarLink section="Awards" />
      //       </div>
      //     </div>
      //   </nav>
    );
  }
}

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
