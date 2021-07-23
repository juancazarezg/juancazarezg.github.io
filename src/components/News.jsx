import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const News = () => {

  function openTrentz() {
    window.open(
      "https://trentz.com.mx", "_blank");
  }
  function openSimplect() {
    window.open(
      "https://simplectfin.com", "_blank");
  }
  function openPAC() {
    window.open(
      "https://phonearmorcorp.com", "_blank");
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Today</span>
              <h3>Actual Projects</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={openTrentz}>
                <img src="assets/img/trentz-logo-jjcg.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/trentz-logo-jjcg.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    Trentz
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={openTrentz}>
                  Creative Agency - Web development, ads, design.
                </h3>
                <div className="tokyo_tm_read_more">
                  <a href="https://trentz.com.mx">
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={openSimplect}>
                <img src="assets/img/simplect-logo-jjcg.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/simplect-logo-jjcg.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    <a href="https://simplectfin.com">Simplect</a>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={openSimplect}>
                  Simple and Direct Finance - Insurance, loans, credits.
                </h3>
                <div className="tokyo_tm_read_more">
                  <a href="https://simplectfin.com">
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={openPAC}>
                <img src="assets/img/pac-logo-jjcg.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/pac-logo-jjcg.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                  Phone Armor Corp
                  </p>
                </div>

                <h3 className="title" onClick={openPAC}>
                  Quality Phone Cases
                </h3>
                <div className="tokyo_tm_read_more">
                  <a href="https://phonearmorcorp.com">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

        </ul>
      </div>
    </>
  );
};

export default News;
