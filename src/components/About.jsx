import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const About = () => {

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About me</span>
                <h3>Get to know me</h3>
              </div>
            </div>
          </div>
        <div className="about_image">
          <img src="assets/img/about.jpg" alt="about" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          
          <div className="description_inner">
            <div className="left">
              <p>
                Hello, I am a software developer located in Mexico. I'm always seeking for new challenges and learning new things.
                Solving problems through programming is something that I like the most.
              </p>

              <p>
                I like working at frontend development. Ultimately I've been exploring the cryptocurrencie's world, the opportunities 
                available to improve different industries and all the problems that could be solved with blockchain technology.
              </p>
              <h4 className="name">Education</h4>
              <p>
               Data Science 
              </p>
              <img src="assets/img/logotec.png" alt="about" style={{width: "80%"}}/>

              <br />
            </div>
            {/* END LEFT */}
            <div className="right">
              <h4 className="name">Programming Languages</h4>
              <ul>
                <li>
                  <div className="progress_inner" data-value="80">
                    <span>
                      <span className="label">Solidity</span>
                      <span className="number">80%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="progress_inner" data-value="95">
                    <span>
                      <span className="label">Java</span>
                      <span className="number">95%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Python</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                </li>
                <li>
                  <div className="progress_inner" data-value="65">
                    <span>
                      <span className="label">GO</span>
                      <span className="number">65%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" style={{width: 65 + '%'}}></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="progress_inner" data-value="90" style={{marginBottom:"30px"}}>
                      <span>
                        <span className="label">JavaScript</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                </li>
              </ul>
              {/* END UL */}
              <h4 className="name" style={{marginTop: '20px'}}>Frameworks and technologies</h4>
              <ul>
                <li>
                  <div className="progress_inner" data-value="90">
                    <span>
                      <span className="label">ReactJS</span>
                      <span className="number">90%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="progress_inner" data-value="65">
                    <span>
                      <span className="label">Web3</span>
                      <span className="number">65%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" style={{width: 65 + '%'}}></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">NodeJS</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                </li>
                <li>
                  <div className="progress_inner" data-value="70">
                    <span>
                      <span className="label">Express</span>
                      <span className="number">70%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" style={{width: 70 + '%'}}></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="progress_inner" data-value="60">
                      <span>
                        <span className="label">Laravel</span>
                        <span className="number">60%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 60 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                </li>
                <li>
                  <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Vue</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>
    </>
  );
};

export default About;
