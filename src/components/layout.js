import PropTypes from "prop-types";
import React from "react";
import ScrollToTopBtn from "./scrollToTop";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
        {children}
        <ScrollToTopBtn />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
