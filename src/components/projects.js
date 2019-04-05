import React from "react";
import PropTypes from "prop-types";

const Projects = ({ data }) => {
  const items = data.map(project => (
    <div>
      <h4>{project.title}</h4>
      <p dangerouslySetInnerHTML={{ __html: project.text }} />
    </div>
  ));
  return (
    <div className="flex pb-4">
      <div className="flex pr-4 section-title">
        <div className="flex-1 flex-col">
          <a
            href="#projects"
            id="projects"
            className="anchor text-grey-darkest no-underline"
          >
            Projects
          </a>
          <div className="w-4/5">
            <hr />
          </div>
        </div>
      </div>
      <div className="flex-1">{items}</div>
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

Projects.defaultProps = {
  data: []
};

export default Projects;
