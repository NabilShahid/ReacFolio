import React from "react";
import ImageGallery from "react-image-gallery";

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
    const imagePath = parentPath + folderName + "/" + (i + 1)+".PNG";
    images.push({
      original: imagePath,
      thumbnail: imagePath,
      sizes:"300px"
    });
  }
  console.log("images :", images);
  return images;
};
const ProjectInfo = ({ project }) => {
  const images = getImagesArrayForGallery(
    project.ImageCount,
    project.ImagesFolder,
    path
  );
  return (
    <div className="projectsInforDiv">
      <div>{project.Name}</div>
      <div>{project.Description}</div>
      <div className="gallery">
        <ImageGallery size="100px" items={images} />
      </div>
    </div>
  );
};

export default ProjectInfo;
