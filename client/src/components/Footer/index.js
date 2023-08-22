//imports React
import React from "react";

// imports the GitHub icon
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="d-inline-flex flex-wrap mb-1 ms-5 foot justify-content-center">
      <p className="m-2">Thanks for visiting!</p>
      <p className="m-2">Check out my Github profile:</p>
      <div className="d-inline-flex">
        <a className="m-2" href="https://github.com/AlexandertheGreat491">
          <FaGithub /> Alexander Van Dyke
        </a>{" "}
      </div>
    </footer>
  );
};

export default Footer;