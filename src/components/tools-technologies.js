import React from "react";
import PropTypes from "prop-types";

const ToolsTechnologies = ({ data }) => {
  const items = {};
  for (const [prop, value] of Object.entries(data)) {
    items[prop] = value.sort().map(v => <li key={v}>{v}</li>);

    // value.forEach(v => {
    //   items.push(<li key={v}>{v}</li>);
    // });
  }

  return (
    <div className="flex pb-4">
      <div className="flex pr-4 section-title">
        <div className="flex-1 flex-col">
          <a
            href="#tools-technologies"
            id="tools-technologies"
            className="anchor text-grey-darkest no-underline"
          >
            Tools &amp; <br /> Technologies
          </a>
          <div className="w-4/5">
            <hr />
          </div>
        </div>
      </div>
      <div className="flex-1 pt-5">
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 md:w-1/2 sm:w-full p-2">
            <div className="pb-2 small-caps">Languages</div>
            <ul>{items.languages}</ul>
          </div>
          <div className="xl:w-1/4 md:w-1/2 sm:w-full p-2">
            <div className="pb-2 small-caps">Technologies</div>
            <ul>{items.technologies}</ul>
          </div>

          <div className="xl:w-1/4 md:w-1/2 sm:w-full p-2">
            <div className="pb-2 small-caps">Development Tools</div>
            <ul>{items["development-tools"]}</ul>
          </div>
          <div className="xl:w-1/4 md:w-1/2 sm:w-full p-2">
            <div className="pb-2 small-caps">Analytic Tools</div>
            <ul>{items["analytic-tools"]}</ul>
          </div>
        </div>
        {/* 
        <div className="flex">
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="flex">
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="flex">
          <div className="col"></div>
          <div className="col"></div>
        </div> */}
      </div>
    </div>
  );
};

ToolsTechnologies.propTypes = {
  data: PropTypes.objectOf(PropTypes.object)
};

ToolsTechnologies.defaultProps = {
  data: []
};

export default ToolsTechnologies;
