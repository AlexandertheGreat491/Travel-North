// imports packages for react application
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="col-12 d-inline-flex pb-3 header">
      <div>
        <Link to="/">
          <h1
            id="navheader"
            className="d-inline-flex w-100 justify-content-center ms-5"
          >
            Travel North
          </h1>
        </Link>

        <div id="nav" className="mt-3">
          <nav className="justify-content-center d-inline-flex flex-row">
            <>
            
              <Link
                className="navlinks m-4 me-5"
                to="/Travel"
                style={{ width: "7%", height: "12%" }}
              >
                <button>
                Travel
                </button>
              </Link>

              <Link
                className="navlinks m-4 me5"
                to="/Explore"
                style={{ width: "7%", height: "12%" }}
              >
                <button>
                Explore
                </button>
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
