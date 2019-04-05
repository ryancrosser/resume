import React from "react";
import PropTypes from "prop-types";

const Profile = ({ data }) => (
  <div className="flex pb-4">
    <div className="flex pr-4 section-title">
      <div className="flex-1 flex-col">
        <a
          href="#profile"
          id="profile"
          className="anchor text-grey-darkest no-underline"
        >
          Profile
        </a>
        <div className="w-4/5">
          <hr />
        </div>
      </div>
    </div>
    <div className="flex-1" dangerouslySetInnerHTML={{ __html: data }} />
  </div>
);

Profile.propTypes = {
  data: PropTypes.string
};

Profile.defaultProps = {
  data: ""
};

export default Profile;
