import React from 'react'

export default function sidebar() {
  return (
    <div className="col-lg-3">
          <section className="resume-section skills-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
              Skills &amp; Tools
            </h2>
            <div className="resume-section-content">
              <div className="resume-skill-item">
                <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <div className="resume-skill-name">Angular</div>
                    <div className="progress resume-progress">
                      <div
                        className="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        style={{"width": "98%"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="resume-skill-name">React</div>
                    <div className="progress resume-progress">
                      <div
                        className="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        style={{"width": "94%"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="resume-skill-name">JavaScript</div>
                    <div className="progress resume-progress">
                      <div
                        className="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        style={{"width": "96%"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </li>

                  <li className="mb-2">
                    <div className="resume-skill-name">Node.js</div>
                    <div className="progress resume-progress">
                      <div
                        className="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        style={{"width": "92%"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
                    <div className="progress resume-progress">
                      <div
                        className="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        style={{"width": "96%"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </li>
                </ul>
              </div>

              <div className="resume-skill-item">
                <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <div className="resume-skill-name">Python/Django</div>
                    <div className="progress resume-progress">
                      <div
                        className="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        style={{"width": "95%"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="resume-skill-name">Ruby/Rails</div>
                    <div className="progress resume-progress">
                      <div
                        className="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        style={{"width": "92%"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="resume-skill-name">PHP</div>
                    <div className="progress resume-progress">
                      <div
                        className="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        style={{"width": "86%"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="resume-skill-name">WordPress/Shopify</div>
                    <div className="progress resume-progress">
                      <div
                        className="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        style={{width: 82}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </li>
                </ul>
              </div>

              <div className="resume-skill-item">
                <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <span className="badge badge-light">DevOps</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-light">Code Review</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-light">Git</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-light">Unit Testing</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-light">Wireframing</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-light">Sketch</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-light">Balsamiq</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-light">WordPress</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-light">Shopify</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="resume-section education-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
              Education
            </h2>
            <div className="resume-section-content">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <div className="resume-degree font-weight-bold">
                    MSc in Computer Science
                  </div>
                  <div className="resume-degree-org">University College London</div>
                  <div className="resume-degree-time">2010 - 2011</div>
                </li>
                <li>
                  <div className="resume-degree font-weight-bold">
                    BSc Maths and Physics
                  </div>
                  <div className="resume-degree-org">Imperial College London</div>
                  <div className="resume-degree-time">2007 - 2010</div>
                </li>
              </ul>
            </div>
          </section>
          <section className="resume-section reference-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
              Awards
            </h2>
            <div className="resume-section-content">
              <ul className="list-unstyled resume-awards-list">
                <li className="mb-2 pl-4 position-relative">
                  <i
                    className="resume-award-icon fas fa-trophy position-absolute"
                    data-fa-transform="shrink-2"
                  />
                  <div className="resume-award-name">Award Name Lorem</div>
                  <div className="resume-award-desc">
                    Award desc goes here, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nulla consequat massa quis enim. Donec
                    pede justo.
                  </div>
                </li>
                <li className="mb-0 pl-4 position-relative">
                  <i
                    className="resume-award-icon fas fa-trophy position-absolute"
                    data-fa-transform="shrink-2"
                  />
                  <div className="resume-award-name">Award Name Ipsum</div>
                  <div className="resume-award-desc">
                    Award desc goes here, ultricies nec, pellentesque.
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="resume-section language-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
              Language
            </h2>
            <div className="resume-section-content">
              <ul className="list-unstyled resume-lang-list">
                <li className="mb-2">
                  <span className="resume-lang-name font-weight-bold">English</span>{" "}
                  <small className="text-muted font-weight-normal">(Native)</small>
                </li>
                <li className="mb-2 align-middle">
                  <span className="resume-lang-name font-weight-bold">French</span>{" "}
                  <small className="text-muted font-weight-normal">
                    (Professional)
                  </small>
                </li>
                <li>
                  <span className="resume-lang-name font-weight-bold">Spanish</span>{" "}
                  <small className="text-muted font-weight-normal">
                    (Professional)
                  </small>
                </li>
              </ul>
            </div>
          </section>
          <section className="resume-section interests-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
              Interests
            </h2>
            <div className="resume-section-content">
              <ul className="list-unstyled">
                <li className="mb-1">Climbing</li>
                <li className="mb-1">Snowboarding</li>
                <li className="mb-1">Cooking</li>
              </ul>
            </div>
          </section>
        </div>
  )
}
