import React from "react";
import ImageGallery from "react-image-gallery";
import "./projectinfo.css";
import { ReactComponent as LinkIcon } from "../../assets/svgs/external-link-symbol.svg";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github-logo.svg";

const path = process.env.PUBLIC_URL + "/assets/images/ProjectsImages/";
// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/"
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/"
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/"
//   }
// ];

const getImagesArrayForGallery = (imageCount, folderName, parentPath) => {
  let images = [];
  for (let i = 0; i < imageCount; i++) {
    const imagePath = parentPath + folderName + "/" + (i + 1) + ".PNG";
    images.push({
      original: imagePath,
      thumbnail: imagePath
    });
  }
  return images;
};
const ProjectInfo = ({ project }) => {
  const images = getImagesArrayForGallery(
    project.ImageCount,
    project.ImagesFolder,
    path
  );
  return (
    <div className="projectsInfoDiv">
      <div className="projectInfoName">
        {project.Name}
        <LinkIcon className="projectLink" />
      </div>
      <div className="projectInfoSubtitle">Workflow Automation Platform</div>
      <div className="projectInfoDescription">{project.Description}</div>
      <div className="projectInfoRepo">
        <GitHubLogo className="githubRepoIcon" />
        Github Repository
        <LinkIcon className="projectInfoRepoLink" />
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
