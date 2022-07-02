import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../img/logo.jpg";

function Navbar() {
  return (
    <div className="nav container-fluid">
      <nav className="navbar navbar-expand-lg col-10 mx-auto">
        <div className="container-fluid row-lg">
          <div className=" row col-lg-6 col-md-5 col-6">
            <a className=" navbar-brand text-sm-start" href="#">
              <img
                className="img rounded-circle px-1"
                src={Logo}
                alt="TUTO CRUISE.logo"
              />
              {/* <h3>TUTOR CRUISE</h3> */}
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse col-6"
            id="navbarSupportedContent"
          >
            <div className="Mentor col-lg-6 my-auto mx-auto">
              <div className="btn  border-0 d-block">
                <a
                  className="text-decoration-none px-lg-5 py-sm-3 text-light"
                  href="#"
                >
                  Find a Mentor
                </a>
              </div>
            </div>
            <div className="Reg-Loggin row col-lg-6 my-auto">
              <div className="col-lg-6">
                <div className="btn border-0 mx-auto d-block">
                  <a className="text-decoration-none text-light" href="#">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <a className="text-decoration-none text-light" href="/login">
                  <div className="btn  border-light my-auto d-block text-light">
                    Loggin
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
