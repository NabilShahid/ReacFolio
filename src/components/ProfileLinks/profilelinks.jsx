import React from "react";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github-logo.svg";
import { ReactComponent as StackOverflowLogo } from "../../assets/svgs/iconfinder_stackoverflow_1220346.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/svgs/linkedin.svg";
import { ReactComponent as CvIcon } from "../../assets/svgs/cv.svg";

import IconButton from "../IconButton/iconbutton";
import "./profilelinks.css";
const openProfileLink = (link) => {
  window.open(link, "_blank");
};
const ProfileLinks = () => {
  let iconStyle = { width: "30px", height: "30px" };
  return (
    <div>
      <div className="profile-icons-row">
        <IconButton
          Title="Github"
          Icon={GitHubLogo}
          IconStyle={{ ...iconStyle, margin: "0px -2px" }}
          onClick={() => openProfileLink("https://github.com/NabilShahid")}
        />
        <IconButton
          Icon={StackOverflowLogo}
          Title="Stackoverflow"
          IconStyle={{
            height: "25px",
            width: "27px",
            marginTop: "-4px",
            marginLeft: "-2px",
          }}
          onClick={() =>
            openProfileLink(
              "https://stackoverflow.com/users/10406529/nabil-shahid"
            )
          }
        />
        <IconButton
          Title="LinkedIn"
          Icon={LinkedInLogo}
          IconStyle={{ height: "24px", width: "24px" }}
          onClick={() =>
            openProfileLink("https://www.linkedin.com/in/nabil-shahid-a41a6952")
          }
        />

        <IconButton
          Title="Download CV in PDF"
          Icon={CvIcon}
          IconStyle={{ height: "28px", width: "24px" }}
          onClick={() =>
            openProfileLink("assets/files/Nabil%20Shahid%20CV.pdf")
          }
        />
      </div>
    </div>
  );
};

export default ProfileLinks;
