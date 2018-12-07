import React from "react";

export default function header() {
  return (
    <header className="resume-header pt-4 pt-md-0">
      <div className="media flex-column flex-md-row">
        <img
          className="mr-3 img-fluid picture mx-auto"
          src="../vivek.jpg"
          alt="Vivek Desai"
        />
        <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
          <div className="primary-info">
            <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
              Vivek Desai
            </h1>
            <div className="title mb-3">Full Stack Developer</div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">
                  <i
                    className="fas fa-paper-plane fa-fw mr-2"
                    data-fa-transform="grow-3"
                  />
                  vivek4329@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:9825515276">
                  <i
                    className="fas fa-mobile-alt fa-fw mr-2"
                    data-fa-transform="grow-6"
                  />
                  +91 9825515276
                </a>
              </li>
            </ul>
          </div>
          <div className="secondary-info ml-md-auto mt-2">
            <ul className="resume-social list-unstyled">
              <li className="mb-3">
                <a href="https://www.linkedin.com/in/vivek-desai-4629229b/">
                  <span className="fa-container text-center mr-2">
                    <i className="fab fa-linkedin-in fa-fw" />
                  </span>
                  linkedin.com/in/vivekdesai
                </a>
              </li>
              <li className="mb-3">
                <a href="https://github.com/imballa">
                  <span className="fa-container text-center mr-2">
                    <i className="fab fa-github-alt fa-fw" />
                  </span>
                  github.com/vivekdesai
                </a>
              </li>
              <li className="mb-3">
                <a href="https://www.facebook.com/vivek.desai.3192">
                  <span className="fa-container text-center mr-2">
                    <i className="fab fa-facebook fa-fw" />
                  </span>
                  facebook.com/vivek.desai.3192/
                </a>
              </li>
              <li>
                <a href="https://cricketmatchpredictions.in/">
                  <span className="fa-container text-center mr-2">
                    <i className="fas fa-globe" />
                  </span>
                  cricketmatchpredictions.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
