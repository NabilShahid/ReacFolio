import React from "react";
import ImageGallery from "react-image-gallery";
import "./projectinfo.css";
import { ReactComponent as LinkIcon } from "../../assets/svgs/external-link-symbol.svg";
import { ReactComponent as GitHubLogo } from "../../assets/svgs/github-logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const imgPath = process.env.PUBLIC_URL + "/assets/images/ProjectsImages/";
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
 const openUrl=(link)=>{
  window.open(link,'_blank');
}
const showToastMessage=(message)=>{
  toast.error(message);
}
const ProjectInfo = ({ project }) => {
  const images = getImagesArrayForGallery(
    project.ImageCount,
    project.ImagesFolder,
    imgPath
  );
  return (
    <div className="projectsInfoDiv">
      <div
        onClick={() => {project.HasUrl?openUrl(project.UrlLink):showToastMessage(project.NoUrlReason)}}
        className="projectInfoName"
      >
        {project.Name}
        <LinkIcon className="projectLink" />
      </div>
      <div className="projectInfoSubtitle">Workflow Automation Platform</div>
      <div className="projectInfoDescription">{project.Description}</div>
      <div onClick={() => {project.HasRepo?openUrl(project.RepoLink):showToastMessage(project.NoRepoReason)}} className="projectInfoRepo">
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ProjectInfo;
