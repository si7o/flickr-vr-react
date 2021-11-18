import React from "react";
import PropTypes from "prop-types";
import "./page-loader.css";

const PageLoader = ({ show }) => {
  return (
    <div id="page-loader" className={show ? "show" : ""}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

PageLoader.propTypes = {
  show: PropTypes.bool,
};

export default PageLoader;
