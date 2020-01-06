import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../index.css";
import Images from "./ImageComponent";
import HomePage from "./HomePageComponent";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Main() {
  return (
    <Router>
      <>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#nucampNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="nucampNavbar">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <Link to="/home" className="nav-link">
                    <i className="fa fa-home fa-lg  mx-auto"></i>Home
                  </Link>
                </li>
                <li className="nav-item" id="servicesButton">
                  <a href="#" className="nav-link">
                    <i className="fa fa-bell fa-lg  mx-auto"></i>Services
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/images">
                    <i className="fa fa-picture-o fa-lg mx-auto"></i>Images
                  </Link>
                </li>
                <li className="nav-item" id="amenitiesButton">
                  <a href="#" className="nav-link">
                    <i className="fa fa-bed fa-lg  mx-auto"></i>Amenities
                  </a>
                </li>
                <li className="nav-item">
                  <a href="excursions.html" className="nav-link">
                    <i className="fa fa-binoculars fa-lg  mx-auto"></i>
                    Excursions
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fa fa-user-o fa-lg  mx-auto"></i>About
                  </a>
                </li>
              </ul>
            </div>
            <span className="nav-text ml-auto text-white">
              <a role="button" data-toggle="modal" data-target="#loginModal">
                <i className="fa fa-sign-in"></i> Login
              </a>
            </span>
          </div>
        </nav>

        <div>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/images" component={Images} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default Main;
