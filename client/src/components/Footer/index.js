import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="d-inline-flex flex-wrap mt-2">
      <p className="m-2">Thanks for visiting!</p>
      <p className="m-2">Check out our Github profiles:</p>
      <div className="d-inline-flex">
        <a className="m-2" href="https://github.com/AlexandertheGreat491">
          <FaGithub /> Alexander Van Dyke
        </a>{" "}
        
        
      </div>
    </footer>
  );
};

export default Footer;