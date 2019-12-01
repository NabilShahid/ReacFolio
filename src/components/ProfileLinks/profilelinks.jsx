import React from "react";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github-logo.svg";
import { ReactComponent as StackOverflowLogo } from "../../assets/svgs/iconfinder_stackoverflow_1220346.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/svgs/iconfinder_linkedin_287553.svg";
import IconButton from "../IconButton/iconbutton";
const ProfileLinks = () => {
   let iconStyle={width:"30px",height:"30px"}
  return (
    <div style={{display:"flex"}}>
        <IconButton Icon={GitHubLogo}  Link="Github" Style={iconStyle}/>
        <IconButton Icon={StackOverflowLogo} Link="https://stackoverflow.com/users/10406529/nabil-shahid" Text="Github" Style={{height:"27px",width:"27px"}}/>
        <IconButton Icon={LinkedInLogo} Link="Github" Style={iconStyle}/>
      {/* <GitHubLogo style={iconStyle} />
      <StackOverflowLogo style={{...iconStyle,marginLeft:"10px"}} />
      <LinkedInLogo style={{...iconStyle,marginLeft:"15px"}} /> */}
    </div>
  );
};

export default ProfileLinks;
