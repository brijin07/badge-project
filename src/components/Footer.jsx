import React from "react";

function Footer() {
  return (
    <div className="mt-5 text-light">
      {/* Footer */}
      <footer className="text-center text-lg-start bg-blue-950 text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block  text-light">
            <h1 className="fs-4 fw-bold ">
              Consulting Agency For Your Business
            </h1>
            <p className="font-semibold">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <button className="btn btn-primary me-5">Contact Us</button>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-light">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">Company info</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Carrier
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    We are hiring
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blog
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-light">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Legal</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Carrier
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    We are hiring
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blog
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-light">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Fectures </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Business Marketing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    User Analytic
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Live Chat
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Unlimited Support
                  </a>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-light">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Resources </h6>
                <p>
                  <a href="#!" className="text-reset">
                    IOS & Android
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Watch a Demo
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Customers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    API
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-light ">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Get In Touch</h6>
                <p>
                  <p>
                    <i className="fas fa-phone me-3" /> (480) 555-0103
                  </p>
                  <p>
                    <i class="fa-solid fa-location-dot"></i> 4517 Washington Ave
                  </p>
                  <i className="fas fa-envelope me-3" />
                  info@example.com
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4 flex justify-around"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <p className="text-light fw-bold ">
            Made With Love By Finland All Right Reserved{" "}
          </p>
          <div className="text-blue-500">
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>

            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Footer;
