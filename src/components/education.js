import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const Education = ({ data }) => {
  return (
    <div className="flex pb-4">
      <div className="flex pr-4 section-title">
        <div className="flex-1 flex-col">
          <a
            href="#education"
            id="education"
            className="anchor text-grey-darkest no-underline"
          >
            Education
          </a>
          <div className="w-4/5">
            <hr />
          </div>
        </div>
      </div>
      <div className="flex-1">
        {/* <ul>{items}</ul> */}
        {data.map(edu => {
          return (
            <div className="pb-3">
              <div>{edu.name}</div>
              <div>{edu.degree} </div>
              <div>
                {edu.graduationDate
                  ? format(edu.graduationDate, "MMMM, YYYY")
                  : ""}
                <span> {edu.inProgress ? "(In Progress)" : ""}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

Education.defaultProps = {
  data: []
};

export default Education;
