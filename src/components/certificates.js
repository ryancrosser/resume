import React from "react";
import PropTypes from "prop-types";

const Certificates = ({ data }) => {
  const items = data.map(cert => <li key={cert.title}>{cert.title}</li>);
  return (
    <div className="flex pb-4">
      <div className="flex pr-4 section-title">
        <div className="flex-1 flex-col">
          <div id="certificates" className="anchor">
            Certificates
          </div>
          <div className="w-4/5">
            <hr />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <ul>{items}</ul>
      </div>
    </div>
  );
};

Certificates.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

Certificates.defaultProps = {
  data: []
};

export default Certificates;
