import React from "react";
import PropTypes from "prop-types";
import { format, distanceInWords } from "date-fns";

const Experience = ({ data }) => {
  const experience = data.map(exper => {
    return (
      <div className="flex-col">
        <div>
          <span className="font-bold">{exper.companyName}</span>{" "}
          <span
            className="float-right"
            title={distanceInWords(
              exper.startDate,
              exper.endDate || Date.now()
            )}
          >
            {format(exper.startDate, "MMMM, YYYY")} to{" "}
            {exper.endDate ? format(exper.endDate, "MMMM, YYYY") : "Present"}
          </span>
        </div>
        <div className="text-sm">{exper.location}</div>
        {exper.positions.map(position => {
          return (
            <>
              <div>
                <span className="small-caps">{position.positionTitle}</span>
                <span
                  className="float-right text-sm"
                  title={
                    position.startDate && position.endDate
                      ? distanceInWords(
                          position.startDate,
                          position.endDate || Date.now()
                        )
                      : ""
                  }
                >
                  {position.startDate && position.endDate
                    ? format(position.startDate, "MMMM, YYYY") +
                      " to " +
                      (position.endDate
                        ? format(position.endDate, "MMMM, YYYY")
                        : "Present")
                    : ""}
                </span>
              </div>
              <div>
                <ul>
                  {position.description.map(description => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            </>
          );
        })}
      </div>
    );
  });
  return (
    <div className="flex pb-4">
      <div className="flex pr-4 section-title">
        <div className="flex-1 flex-col">
          <a
            href="#experience"
            id="experience"
            className="anchor text-grey-darkest no-underline"
          >
            Experience
          </a>
          <div className="w-4/5">
            <hr />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div>{experience}</div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

Experience.defaultProps = {
  data: []
};

export default Experience;
