import React from 'react';
import { Link } from 'react-router-dom';
import "./css/style.css";
import "./css/bootstrap.min.css";
 
const Login = () => {
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
            <div class="login-container">
              <h2>Login</h2>
              <form action="login.php" method="POST">
                <div class="input-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                  ></input>
                </div>
                <div class="input-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                  ></input>
                </div>
                <Link to={"/dashboard"}>
                <button type="submit">Login</button>
                </Link>
              </form>
              <Link to={"/registeruser"}>
                <a href="forgot-password.html" class="forgot-password">
                  Register
                </a>
              </Link>
            </div>
          </div>
        </body>
      </html>
    );
}


 
export default Login