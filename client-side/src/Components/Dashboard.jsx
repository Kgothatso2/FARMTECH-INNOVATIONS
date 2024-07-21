import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import "./css/bootstrap.min.css";

const Dashboard = () => {
    return (
      <html>
        <head>
          <meta charset="utf-8"></meta>
          <title>FarmTech Innovations</title>
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          ></meta>
          <meta content="Free HTML Templates" name="keywords"></meta>
          <meta content="Free HTML Templates" name="description"></meta>

          <link href="img/favicon.ico" rel="icon"></link>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
            rel="stylesheet"
          ></link>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
            rel="stylesheet"
          ></link>

          <link
            href="lib/owlcarousel/assets/owl.carousel.min.css"
            rel="stylesheet"
          ></link>

          <link href="css/bootstrap.min.css" rel="stylesheet"></link>

          <link href="css/style.css" rel="stylesheet"></link>
        </head>
        <body>
          <div>
          <nav class="navbar navbar-expand-lg">
            <a href="index.html" class="navbar-brand p-0">
              <h1 class="m-0">FarmTech Innovations
              </h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto py-0 me-n3">
                <Link to={"/"}>
                  <a class="nav-item">Home</a>
                </Link>
                <a href="#about" class="nav-item">
                  About
                </a>
                <a href="#offers" class="nav-item">
                  Offers
                </a>
                <a href="#us" class="nav-item">
                  Why Us?
                </a>
                <Link to={"/login"}>
                  <a class="nav-item">Login</a>
                </Link>
              </div>
            </div>
          </nav>

            <div class="container text-center" style={{ marginTop: "50px" }}>
              <div class="row">
                <div
                  class="col"
                  style={{
                    borderRightColor: "black",
                    borderRightStyle: "solid",
                    borderRightWidth: "thin",
                    paddingRight: "25px",
                  }}
                >
                  <h2>
                    <b>Daily Overview</b>
                  </h2>
                  <div class="row">
                    <div
                      class="col"
                      style={{
                        borderRightColor: "black",
                        borderRightStyle: "solid",
                        borderRightWidth: "thin",
                      }}
                    >
                      <p>Wed-05, July</p>
                    </div>
                    <div class="col">
                      <p>08:47 pm</p>
                    </div>
                  </div>
                  <div
                    class="row"
                    style={{
                      textAlign: "left",
                      border: "2px solid #000000",
                      borderRadius: "25px",
                      marginTop: "15px",
                    }}
                  >
                    <p>Weather</p>
                    <hr />
                    <p>Field Location</p>
                    <br />
                    <h1>+15 Degrees</h1>
                  </div>
                </div>
                <div
                  class="col"
                  style={{
                    borderRightColor: "black",
                    borderRightStyle: "solid",
                    borderRightWidth: "thin",
                    paddingRight: "10px",
                  }}
                >
                  <p>
                    <h4>
                      <b>Map Overview</b>
                    </h4>
                    Field Location
                  </p>
                  <img
                    src={require("./img/farm.jpg")}
                    height={"550"}
                    width={"400"}
                  />
                </div>
                <div
                  class="col"
                  style={{ paddingLeft: "25px", color: "white" }}
                >
                  <div
                    class="row"
                    style={{
                      paddingLeft: "15px",
                      borderRadius: "25px",
                      marginTop: "15px",
                      backgroundColor: "gray",
                    }}
                  >
                    <h4 style={{ color: "white" }}>Farm Logs</h4>
                    <hr style={{ height: "3px" }} />
                    <div class="row">
                      <div class="col">
                        <h5 style={{ color: "white" }}>July 01, 2024</h5>
                        <p>
                          Some stuff that must go here.
                        </p>
                        <h5 style={{ color: "white" }}>July 01, 2024</h5>
                        <p>
                          Some stuff that must go here.
                        </p>
                        <h5 style={{ color: "white" }}>July 01, 2024</h5>
                        <p>
                          Some stuff that must go here.
                        </p>
                      </div>
                      <div class="col">
                        <h5 style={{ color: "white" }}>July 01, 2024</h5>
                        <p>
                          Some stuff that must go here. 
                        </p>
                        <h5 style={{ color: "white" }}>July 01, 2024</h5>
                        <p>
                          Some stuff that must go here. 
                        </p>
                        <button>View Notes</button>
                      </div>
                    </div>
                  </div>

                  <div
                    class="row"
                    style={{
                      paddingLeft: "15px",
                      borderRadius: "25px",
                      marginTop: "15px",
                      backgroundColor: "lightpink",
                    }}
                  >
                    <h4 style={{ color: "white" }}>Market Insights</h4>
                    <hr style={{ height: "3px"}} />
                    <div class="row">
                      <div class="col">
                        <h5 style={{ color: "white" }}>July 01, 2024</h5>
                        <p>
                          Some stuff that must go here. Yeah I knoe right here.
                        </p>
                        <h5 style={{ color: "white" }}>July 01, 2024</h5>
                        <p>
                          Some stuff that must go here. Yeah I knoe right here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
}

export default Dashboard