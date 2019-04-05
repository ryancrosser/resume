import React from "react";
import PropTypes from "prop-types";

const Skills = ({ data }) => {
  const items = data.map(skill => <li key={skill}>{skill}</li>);
  return (
    <div className="flex pb-4">
      <div className="flex pr-4 section-title">
        <div className="flex-1 flex-col">
          <a
            href="#skills"
            id="skills"
            className="anchor text-grey-darkest no-underline"
          >
            Skills
          </a>
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
  data: PropTypes.array
};

Skills.defaultProps = {
  data: []
};

export default Skills;
