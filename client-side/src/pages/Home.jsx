import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/style.css";
import "../styles/css/bootstrap.min.css";

const Home = () => {
  return (
    <html>
      <head>
        <meta charset="utf-8"></meta>
        <title>FARMTECH INNOVATIONS</title>
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
            <a href="#" class="navbar-brand p-0">
              <h2 class="m-0">FARMTECH INNOVATIONS</h2>
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
                <Link to={"/"} class="nav-item">
                  Home
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
                <a href="#contact" class="nav-item">
                  Contact Us
                </a>
                <Link to={"/login"} class="nav-item">
                  Login
                </Link>
              </div>
            </div>
          </nav>

          <div class="container-fluid bg-secondary p-0" id="about">
            <div class="row g-0">
              <div class="col-lg-6 py-6 px-5">
                <h1 class="display-5 mb-4" style={{ color: "#46da92" }}>
                  Welcome To <span style={{ color: "#46da92" }}>FarmTech</span>
                </h1>
                <h4 class="mb-4" style={{ color: "#46da92" }}>
                  We a company powered and driven by innovation and making a
                  difference!
                </h4>
                <p class="mb-4">
                  We having been in the agricultural industry since 2015. We
                  have partned with a lot of industry leading organizations in
                  the argricultural space.
                </p>
                <a
                  href="#contact"
                  class="btn btn-primary py-md-3 px-md-5 rounded-pill"
                >
                  Contact Us
                </a>
              </div>
              <div class="col-lg-6">
                <div class="h-100 d-flex flex-column justify-content-center bg-primary p-5">
                  <div class="d-flex text-white mb-5">
                    <div
                      class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fa fa-user-tie fs-4"
                        style={{ color: "#46da92" }}
                      ></i>
                    </div>
                    <div class="ps-4">
                      <h3>Enhanced Productivity</h3>
                      <p class="mb-0">
                        Increased Yields: By following optimal planting
                        schedules and growth monitoring, farmers can achieve
                        better crop yields.
                        <br />
                        Improved Efficiency: Automated reminders and real-time
                        weather updates help farmers manage their time and
                        resources more effectively.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex text-white mb-5">
                    <div
                      class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fa fa-chart-line fs-4"
                        style={{ color: "#46da92" }}
                      ></i>
                    </div>
                    <div class="ps-4">
                      <h3>Cost Reduction</h3>
                      <p class="mb-0">
                        Resource Optimization: Efficient use of fertilizers and
                        timely pest control measures reduce unnecessary costs.
                        <br />
                        Risk Mitigation: Early warnings for adverse weather
                        conditions and pest outbreaks help farmers take
                        preventive actions, minimizing potential losses.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex text-white">
                    <div
                      class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fa fa-balance-scale fs-4"
                        style={{ color: "#46da92" }}
                      ></i>
                    </div>
                    <div class="ps-4">
                      <h3>Market Competitiveness</h3>
                      <p class="mb-0">
                        Informed Decisions: Access to market price trends
                        enables farmers to sell their produce at the right time
                        for better profitability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid pt-6 px-5" id="offers">
            <div class="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
              <h1 class="display-5 mb-0">What We Offer!!!</h1>
            </div>
            <div class="row g-5" style={{ marginTop: "-100px" }}>
              <div class="col-lg-6 col-md-6">
                <div class="service-item bg-secondary text-center px-5">
                  <div
                    class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <i class="fa fa-user-tie fa-2x"></i>
                  </div>
                  <h3 class="mb-3">Crop Management</h3>
                  <p class="mb-0">
                    Planting Schedules: Provides optimal planting times based on
                    local climate data and crop type, ensuring farmers plant at
                    the best times for maximum yield.
                    <br />
                    Growth Monitoring: Tracks crop growth stages and provides
                    reminders for key tasks like fertilization and watering.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="service-item bg-secondary text-center px-5">
                  <div
                    class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
                    sstyle={{ width: "90px", height: "90px" }}
                  >
                    <i class="fa fa-chart-pie fa-2x"></i>
                  </div>
                  <h3 class="mb-3">Weather Forecasting</h3>
                  <p class="mb-0">
                    Real-time Updates: Offers current weather conditions and
                    short-term forecasts to help farmers plan their activities.
                    <br />
                    Alerts: Sends notifications for extreme weather conditions
                    such as frost, drought, or heavy rainfall.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="service-item bg-secondary text-center px-5">
                  <div
                    class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <i class="fa fa-chart-line fa-2x"></i>
                  </div>
                  <h3 class="mb-3">Pest and Disease Management</h3>
                  <p class="mb-0">
                    Identification Tools: Helps identify common pests and
                    diseases using a simple image recognition feature.
                    <br />
                    Treatment Suggestions: Provides basic recommendations for
                    treatment options, focusing on commonly used solutions.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="service-item bg-secondary text-center px-5">
                  <div
                    class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <i class="fa fa-chart-area fa-2x"></i>
                  </div>
                  <h3 class="mb-3">Market Insights</h3>
                  <p class="mb-0">
                    Price Trends: Displays current market prices for various
                    crops, helping farmers make informed decisions about when to
                    sell their produce.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid py-6 px-5" id="us">
            <div class="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
              <h1 class="display-5 mb-0">Why Choose Us?</h1>
              <hr class="w-25 mx-auto bg-primary"></hr>
            </div>
            <div class="row g-5">
              <div class="col-lg-4">
                <div class="row g-5">
                  <div class="col-12">
                    <div
                      class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fa fa-cubes fs-4"
                        style={{ color: "#46da92" }}
                      ></i>
                    </div>
                    <h3>Best In Industry</h3>
                    <p class="mb-0">
                      We have won multiple awards and rated number one in our
                      field.
                    </p>
                  </div>
                  <div class="col-12">
                    <div
                      class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fa fa-percent fs-4"
                        style={{ color: "#46da92" }}
                      ></i>
                    </div>
                    <h3>99% Success Rate</h3>
                    <p class="mb-0">
                      Over the years we have achieved an average 99% success
                      rate.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4" style={{ backgroundColor: "whitesmoke" }}>
                <div class="row g-5">
                  <div class="col-12">
                    <div
                      class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fa fa-award fs-4"
                        style={{ color: "#46da92" }}
                      ></i>
                    </div>
                    <h3>Award Winning</h3>
                    <p class="mb-0">
                      Our services have won multiple awards from different
                      bodies in the industry.
                    </p>
                  </div>
                  <div class="col-12">
                    <div
                      class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fa fa-user-tie fs-4"
                        style={{ color: "#46da92" }}
                      ></i>
                    </div>
                    <h3>Professional Advisors</h3>
                    <p class="mb-0">
                      Our team of advisors offer exceptional service that has
                      become the standard in the idustry.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="row g-5">
                  <div class="col-12">
                    <div
                      class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="far fa-smile-beam fs-4"
                        style={{ color: "#46da92" }}
                      ></i>
                    </div>
                    <h3>100% Happy Client</h3>
                    <p class="mb-0">
                      Client satisfaction is a high priority for us. You can
                      judge us on client complaints because there is none.
                    </p>
                  </div>
                  <div class="col-12">
                    <div
                      class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        class="fa fa-headset fs-4"
                        style={{ color: "#46da92" }}
                      ></i>
                    </div>
                    <h3>24/7 Customer Support</h3>
                    <p class="mb-0">
                      Our team of experts are always available to assist with
                      any queries or issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid bg-secondary px-0" id="contact">
            <div class="row g-0">
              <div class="col-lg-6 py-6 px-5">
                <h1 class="display-10 mb-4">Inquire About Service</h1>
                <form>
                  <div class="row gx-3">
                    <div class="col-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="form-floating-1"
                          placeholder="John Doe"
                        ></input>
                        <label for="form-floating-1">Full Name</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          id="form-floating-2"
                          placeholder="name@example.com"
                        ></input>
                        <label for="form-floating-2">Email address</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-floating">
                        <select
                          class="form-select"
                          id="floatingSelect"
                          aria-label="Financial Consultancy"
                        >
                          <option selected>Crop Management</option>
                          <option value="1">Weather Forecasting</option>
                          <option value="2">Pest and Disease Management</option>
                          <option value="2">Market Insights</option>
                        </select>
                        <label for="floatingSelect">Select A Service</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <button class="btn btn-primary w-100 h-100" type="submit">
                        Inquire
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-6" style={{ minHeight: "400px" }}>
                <div class="position-relative h-100">
                  <img
                    class="position-absolute"
                    src={require("../assets/img/quote.jpg")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid  p-5">
            <div class="row g-5">
              <div class="col-12 text-center">
                <h1 class="display-5 mb-4">Stay Updated!!!</h1>
                <form class="mx-auto" style={{ maxWidth: "600px" }}>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control border-white p-3"
                      placeholder="Your Email"
                    ></input>
                    <button class="btn btn-dark px-4">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="container-fluid bg-dark text-secondary p-5">
            <div class="row g-5">
              <div class="col-lg-3 col-md-6"></div>
            </div>

            <p class="m-0">
              &copy;{"FarmTech "}
              <a class="text-secondary border-bottom" href="#">
                coyright 2024
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>

        <a
          href="#"
          class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i class="bi bi-arrow-up"></i>
        </a>

        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="js/main.js"></script>
      </body>
    </html>
  );
};

export default Home;
