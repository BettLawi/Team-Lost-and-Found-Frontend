import React from "react";
import { Link } from "react-router-dom";

const RedirectAdmin = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          margin: "7rem",
          fontStyle: "italic",
          fontSize: '3rem'
        }}
      >
        Sorry, You are not authorized to view this page. Click{" "}
        <Link to="/login" >here</Link> Only admins can
      </h1>
    </div>
  );
};

export default RedirectAdmin;
