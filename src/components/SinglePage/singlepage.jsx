import React from "react";
const SinglePage = ({ children, currRef, isFirstPage,id }) => {
  
  return (
    <div
      ref={currRef}
      style={{
        minHeight: "100vh",
        paddingBottom: isFirstPage ? 0 : "40px",
        paddingTop: isFirstPage ? 0 : "50px",
        background: "rgb(247, 247, 247)",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 4px 0px"
      }}
    >
      {children}
    </div>
  );
};

export default SinglePage;
