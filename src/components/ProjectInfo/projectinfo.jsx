import React from "react";
import ImageGallery from "react-image-gallery";
import "./projectinfo.css";
import { ReactComponent as LinkIcon } from "../../assets/svgs/external-link-symbol.svg";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github-logo.svg";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
import { ICON_LABELS } from "../../constants.js";

import "react-toastify/dist/ReactToastify.css";

const imgPath = process.env.PUBLIC_URL + "/assets/images/ProjectsImages/";
const getImagesArrayForGallery = (imageCount, folderName, parentPath) => {
  let images = [];
  for (let i = 0; i < imageCount; i++) {
    const imagePath = parentPath + folderName + "/" + (i + 1) + ".PNG";
    images.push({
      original: imagePath,
      thumbnail: imagePath,
    });
  }
  return images;
};
const iconStyle = {
  width: "20px",
  height: "20px",
  marginRight: "1px",
  marginTop: "-3px",
};
const openUrl = (link) => {
  window.open(link, "_blank");
};
const showToastMessage = (message) => {
  toast(message);
};
const ProjectInfo = ({ project }) => {
  const images = getImagesArrayForGallery(
    project.ImageCount,
    project.ImagesFolder,
    imgPath
  );
  return (
    <div className="projects-info-div">
      <div className="project-info-name">
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            project.HasUrl
              ? openUrl(project.UrlLink)
              : showToastMessage(project.NoUrlReason);
          }}
        >
          {project.Name}
          <LinkIcon className="project-link" />
        </span>
      </div>
      <div className="project-info-subtitle">
        {project.Subtitle + " (" + project.Target + ")"}
      </div>
      <div className="project-info-technologies-container">
        {project.Technologies.map((t) => (
          <span className="project-info-technology">
            <span>
              {typeof t == "string" ? (
                <Icon icon={TechologiesIcons[t]} style={iconStyle} />
              ) : (
                <t.Icon style={iconStyle} />
              )}
            </span>
            <span className="project-info-technology-text">
              {ICON_LABELS[typeof t == "string" ? t : t.Name]}
            </span>
          </span>
        ))}
      </div>
      <div
        className="project-info-description"
        dangerouslySetInnerHTML={{ __html: project.Description }}
      ></div>
      <div
        onClick={() => {
          project.HasRepo
            ? openUrl(project.RepoLink)
            : showToastMessage(project.NoRepoReason);
        }}
        className="project-info-repo"
      >
        <GitHubLogo className="github-repo-icon" />
        Github Repository
        <LinkIcon className="project-info-repo-link" />
      </div>
      <div className="gallery">
        <ImageGallery
          showFullscreenButton={false}
          showPlayButton={false}
          size="100px"
          items={images}
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
