import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function Footer () {
  return (
    <footer className="bg-dark text-white text-center py-3 fixed-bottom">
      &copy; {new Date().getFullYear()} Team AR. All Rights Reserved.
    </footer>
  );
};

export default Footer;