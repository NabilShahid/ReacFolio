import React from "react";
const SinglePage = ({ children,currRef }) => {
  return <div ref={currRef} style={{ minHeight: "100vh" }}>{children}</div>;
};

export default SinglePage;
