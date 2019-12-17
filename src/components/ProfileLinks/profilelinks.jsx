import React from "react";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github-logo.svg";
import { ReactComponent as StackOverflowLogo } from "../../assets/svgs/iconfinder_stackoverflow_1220346.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/svgs/linkedin.svg";
import { ReactComponent as CvIcon } from "../../assets/svgs/cv.svg";

import IconButton from "../IconButton/iconbutton";
import "./profilelinks.css";
const ProfileLinks = () => {
  let iconStyle = { width: "30px", height: "30px" };
  return (
    <div>
      <div className="profileIconsRow">
        <IconButton
          Icon={GitHubLogo}
          Text="Github"
          Link="Github"
          Style={iconStyle}
        />
        <IconButton
          Icon={StackOverflowLogo}
          Text="StackOverflow"
          Link="https://stackoverflow.com/users/10406529/nabil-shahid"
          Style={{ height: "25px", width: "27px", marginTop: "-4px" }}
        />
      </div>
      <div className="profileIconsRow" style={{ marginTop: "10px" }}>
        <IconButton
          Icon={LinkedInLogo}
          Text="LinkedIn"
          Link="Github"
          Style={{ height: "24px", width: "24px", marginLeft:"5px"}}
        />

        <IconButton
          Icon={CvIcon}
          Text="Download CV"
          Link="Github"
          Style={{ height: "28px", width: "24px", marginLeft:"4px"}}

        />
      
      </div>
    </div>
  );
};

export default ProfileLinks;
