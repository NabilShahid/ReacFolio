import React from "react";
const SinglePage = ({ children,currRef,isFirstPage }) => {
  return <div ref={currRef} style={{ minHeight: "100vh", paddingTop:(isFirstPage?0:"50px") }}>{children}</div>;
};

export default SinglePage;
