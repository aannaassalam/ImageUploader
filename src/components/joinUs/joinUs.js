import React, { Component } from "react";
import "./joinUs.css";
import interviewVideo from "../../assets/interview-white.mp4";
import interview from "../../assets/interview-white-poster.jpg";

export default class JoinUs extends Component {
  render() {
    return (
      <div className="joinus">
        <div className="interview-video">
          <video src={interviewVideo} poster={interview} autoPlay></video>
        </div>
        <div className="heading">
          <h2>Join us</h2>
          <h3>Open positions</h3>
        </div>
        <div className="locations">
          <div className="san">
            <h4>
              San Francisco <span></span>
              <svg
                class="JoinUs--joinUs__headingIcon--1mXV7"
                width="14"
                height="18"
                role="img"
              >
                <path d="M7,0.2c-3.9,0-7,3.1-7,7c0,5.2,6.5,10.2,6.8,10.4c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1C7.5,17.5,14,12.4,14,7.2C14,3.4,10.9,0.2,7,0.2z M7,10.2c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.6,10.2,7,10.2z"></path>
              </svg>
            </h4>
            <p>No open positions</p>
          </div>
          <div className="nyc">
            <h4>
              New York <span></span>
              <svg
                class="JoinUs--joinUs__headingIcon--1mXV7"
                width="14"
                height="18"
                role="img"
              >
                <path d="M7,0.2c-3.9,0-7,3.1-7,7c0,5.2,6.5,10.2,6.8,10.4c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1C7.5,17.5,14,12.4,14,7.2C14,3.4,10.9,0.2,7,0.2z M7,10.2c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.6,10.2,7,10.2z"></path>
              </svg>
            </h4>
            <p>No open positions</p>
          </div>
          <div className="nyc">
            <h4>
              Reykjavík
              <span></span>
              <svg
                class="JoinUs--joinUs__headingIcon--1mXV7"
                width="14"
                height="18"
                role="img"
              >
                <path d="M7,0.2c-3.9,0-7,3.1-7,7c0,5.2,6.5,10.2,6.8,10.4c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1C7.5,17.5,14,12.4,14,7.2C14,3.4,10.9,0.2,7,0.2z M7,10.2c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.6,10.2,7,10.2z"></path>
              </svg>
            </h4>
            <p>No open positions</p>
            <h4>
              Los Angeles <span></span>
              <svg
                class="JoinUs--joinUs__headingIcon--1mXV7"
                width="14"
                height="18"
                role="img"
              >
                <path d="M7,0.2c-3.9,0-7,3.1-7,7c0,5.2,6.5,10.2,6.8,10.4c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1C7.5,17.5,14,12.4,14,7.2C14,3.4,10.9,0.2,7,0.2z M7,10.2c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.6,10.2,7,10.2z"></path>
              </svg>
            </h4>
            <p>No open positions</p>
          </div>
        </div>
      </div>
    );
  }
}
