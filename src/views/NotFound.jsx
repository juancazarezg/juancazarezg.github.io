import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/tokyoczrz-logo-black.png" alt="brand" />
            </Link>
          </div>
          {/* END LOGO */}
          <div className="copyright">
          </div>
          {/* END COPYRIGHT */}
        </div>
      </div>
      {/* END LEFT PART */}

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_error">
                <div className="tokyo_tm_error_inner">
                  <h1>404!</h1>
                  <h3>Page not found</h3>
                  <p>The page you were looking for could not be found.</p>
                  <div>
                  <iframe width="600" height="400" src="https://www.youtube.com/embed/LW6RWSiR88s?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <Link to="/" className="ib-button">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART */}

      <footer className="footer-wrapper">
        <div className="copyright">
          <p>
            &copy;   Created by
            <a
              href=" "
              target="_blank"
              rel="noreferrer"
            >
              Ib-Themes
            </a>
          </p>
        </div>
        {/* END COPYRIGHT */}
      </footer>
    </div>
  );
};

export default NotFound;
