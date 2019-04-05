import React from "react";
import PropTypes from "prop-types";

const Skills = ({ data }) => {
  const items = data.map(skill => <li key={skill}>{skill}</li>);
  return (
    <div className="flex pb-4">
      <div className="flex pr-4 section-title">
        <div className="flex-1 flex-col">
          <div id="skills" className="anchor">
            Skills
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

Skills.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

Skills.defaultProps = {
  data: []
};

export default Skills;
