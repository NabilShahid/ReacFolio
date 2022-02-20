import React from "react";
import "./singlepage.css";

const SinglePage = ({ children, currRef, isFirstPage, id }) => {
  return (
    <section
      ref={currRef}
      className={`single-page ${isFirstPage ? "first" : ""}`}
    >
      {children}
    </section>
  );
};

export default SinglePage;
