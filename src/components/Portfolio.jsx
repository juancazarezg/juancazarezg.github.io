import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Take a look at my work</h3>
              </div>
            </div>
          </div>
          <div className="portfolio_filter">
            <ul className="portfolio_list">
              <li>
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a href="https://simplectfin.com" target="_blank" rel="noreferrer">
                      <img
                        src="assets/img/portfolio/simplect.png"
                        alt="Portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a href="https://visionescuela.com" target="_blank" rel="noreferrer">
                      <img
                        src="assets/img/portfolio/vision.png"
                        alt="Portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a href="https://kour.mx" target="_blank" rel="noreferrer">
                      <img
                        src="assets/img/portfolio/kour.png"
                        alt="Portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a href="https://phonearmorcorp.com" target="_blank" rel="noreferrer">
                      <img
                        src="assets/img/portfolio/pac.png"
                        alt="Portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a href="https://odriozolacollection.com" target="_blank" rel="noreferrer">
                      <img
                        src="assets/img/portfolio/odriozola.png"
                        alt="Portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a href="https://promival.com.mx" target="_blank" rel="noreferrer">
                      <img
                        src="assets/img/portfolio/promival.png"
                        alt="Portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a href="https://rinpack.com" target="_blank" rel="noreferrer">
                      <img
                        src="assets/img/portfolio/rinpack.png"
                        alt="Portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a href="https://pro-inmex.com" target="_blank" rel="noreferrer">
                      <img
                        src="assets/img/portfolio/proinmex.png"
                        alt="Portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
