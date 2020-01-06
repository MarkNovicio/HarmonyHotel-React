import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../index.css";

function HomePage() {
  return (
    <div>
      <div id="hero-overlay"></div>
      <div className="container">
        <div class="row">
          <div class="col col-4-xs mx-auto ">
            <p class="hotel-welcome text-center text-white">Welcome to</p>
            <p class="hotel-welcome hotel-name text-center text-white">
              Harmony Hotel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
