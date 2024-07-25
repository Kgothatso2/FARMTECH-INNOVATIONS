import React from 'react';
import "../styles/css/style.css";
import "../styles/css/bootstrap.min.css";

function Footer() {
    return (
        <footer>
            <div class="container-fluid bg-dark text-secondary p-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6"></div>
                </div>

                <p class="m-0">
                    &copy;{"FarmTech "}
                    <a class="text-secondary border-bottom" href="/">
                        coyright 2024
                    </a>
                    . All Rights Reserved.
                </p>
            </div>
            <a
            href="/"
            class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
            >
            <i class="bi bi-arrow-up"></i>
            </a>
        </footer>
    );
}

export default Footer