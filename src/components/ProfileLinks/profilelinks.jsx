import React from "react";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github-logo.svg";
import { ReactComponent as StackOverflowLogo } from "../../assets/svgs/iconfinder_stackoverflow_1220346.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/svgs/iconfinder_linkedin_287553.svg";
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
          Style={iconStyle}
        />

        <IconButton
          Icon={LinkedInLogo}
          Text="LinkedIn"
          Link="Github"
          Style={iconStyle}
        />
        {/* <GitHubLogo style={iconStyle} />
      <StackOverflowLogo style={{...iconStyle,marginLeft:"10px"}} />
      <LinkedInLogo style={{...iconStyle,marginLeft:"15px"}} /> */}
      </div>
    </div>
  );
};

export default ProfileLinks;
