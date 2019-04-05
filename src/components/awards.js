import React from "react";
import PropTypes from "prop-types";

const Awards = ({ data }) => {
  const items = data.map(award => <li key={award.title}>{award.title}</li>);
  return (
    <div className="flex pb-4">
      <div className="flex pr-4 section-title">
        <div className="flex-1 flex-col">
          <div id="awards" className="anchor">
            Awards
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

Awards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

Awards.defaultProps = {
  data: []
};

export default Awards;
