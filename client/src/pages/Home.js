import React from "react";

const Home = () => {
  return (
    <div className="about square " style={{ height: "100vh" }}>
      <div>
        <h2 className="homeheader border border-secondary rounded text-center">About Travel North</h2>
      </div>
      <div className="about">
        <p className="m-3 info justify-content-center container border border-secondary rounded">
          This is your one-stop shop for finding all of your information on
          traveling and exploring northern locations in Minnesota, instead of
          having to use dozens of different websites.
        </p>
      </div>
    </div>
  );
};

export default Home;
