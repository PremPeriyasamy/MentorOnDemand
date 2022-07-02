import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./navbar";

import HTML from "../../img/HTML.png";
import CSS from "../../img/css.png";
import JS from "../../img/Javascript.png";
import Bootstrap from "../../img/Bootstrap.png";
import Node from "../../img/Node.jpg";
import ReactJs from "../../img/react.png";
import Angular from "../../img/Angular.png";
import Mongo from "../../img/Mongo.png";

function Home() {
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      {/* This is page 1 */}
      <div className="container-fluid py-5 my-5">
        <h1 className="fs-1 text-info text-center text-gradient">
          Learn Or Improve Your-Skills With Us
        </h1>
        <dvi className=" d-flex flex-column py-5 my-5" id="grad1">
          <h1 className="text-center py-4">Ready To Learn?</h1>
          <p className="fs-4 text-center py-2">
            This is best way to learn and develop
          </p>
          <div className="mx-auto">
            <div className="btn btn-info d-inline">Start Learning</div>
          </div>
        </dvi>
      </div>
      {/* This is page 2 */}
      <div className="techologies container-fluid m-auto col-12">
        <h1 className="fs-1 text-info text-center text-gradient">
          Techologies
        </h1>
        <div className="row">
          <div className="card col p-3 m-3">
            <img src={HTML} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">
                What is HTML used for? HTML is the language for describing the
                structure of Web pages.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col p-3 m-3">
            <img src={CSS} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">CSS</h5>
              <p className="card-text">
                CSS stands for cascading style sheets.CSS is a design
                language that makes a website look more appealing than just
                plain .
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col p-3 m-3">
            <img src={Bootstrap} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col p-3 m-3">
            <img src={JS} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Java Script</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card col p-3 m-3">
            <img src={ReactJs} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">React Js</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col p-3 m-3">
            <img src={Angular} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Angular Js</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col p-3 m-3">
            <img src={Mongo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mongo Db</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col p-3 m-3">
            <img src={Node} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Node Js</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer bg-secondary text-end d-flex flex-column flex-sm-row justify-content-between py-4 px-3 px-sm-5">
        <div className="contact-us">
          <span>Need Help?</span>
          <a href="#" className="default-link">
            Contact Us
          </a>
        </div>
        <div className="copyright">
          Copyright &copy; 2021. All right reserved
        </div>
      </footer>
    </div>
  );
}
export default Home;
