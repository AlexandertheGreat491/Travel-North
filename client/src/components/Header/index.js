// imports packages for react application
import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="col-12 d-inline-flex pb-3">
      <div>
        <Link to="/">
          <h1
            id="navheader"
            className="d-inline-flex w-100 justify-content-center ms-4"
          >
            Travel North
          </h1>
        </Link>

        <div id="nav" className="mt-3">
          <nav className="justify-content-center d-inline-flex flex-row">
            
            
            <>
              <Link
                className="navlinks me-3 ms-4 mb-2"
                to="/"
                style={{ width: "5%", height: "15%" }}
              >
                Page
              </Link>
              
              <Link
                className="navlinks me-3 ms-4 mb-2"
                to=""
                style={{ width: "5%", height: "15%" }}
              >
                Page
              </Link>
              
            </>
          </nav>
        </div>
      </div>
    </header>
  );
}

// exports the Header component so that it can be used by the app
export default Header;