import React, { Component, createRef } from "react";
import "./heroSection.css";
import orange from "../../assets/orange-video.mp4";
import orangePoster from "../../assets/orange.jfif";
import { TweenMax, Power3 } from "gsap";

export default class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.video = createRef();
    this.featured = createRef();
    this.span1 = createRef();
    this.span2 = createRef();
    this.span3 = createRef();
    this.span4 = createRef();
    this.span5 = createRef();
    this.span6 = createRef();
    this.span7 = createRef();
    this.box = createRef();
  }

  componentDidMount() {
    TweenMax.from(
      this.video.current,
      3,
      {
        css: {
          height: "1280px",
          width: "1800px",
          position: "fixed",
          top: 0,
          right: 0,
        },
        y: -1800,
        ease: Power3.easeInOut,
      },
      0.5
    );
    TweenMax.to(this.featured.current, 1, {
      opacity: 1,
      y: -20,
      delay: 0.5,
      ease: Power3.easeOut,
    });
    TweenMax.staggerFrom(
      [this.span1.current, this.span2.current, this.span3.current],
      2,
      { opacity: 0, y: 70, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFrom(
      [
        this.span4.current,
        this.span5.current,
        this.span6.current,
        this.span7.current,
      ],
      2,
      { opacity: 0, y: 70, ease: Power3.easeOut },
      0.4
    );
    TweenMax.from(
      this.box.current,
      1,
      { opacity: 0, y: -20, ease: Power3.easeInOut },
      0.4
    );
    TweenMax.to(
      this.box.current,
      1,
      { opacity: 0, ease: Power3.easeInOut },
      0.8
    );
  }

  render() {
    return (
      <div className="heroSection">
        <div className="navbar">
          <div className="logo">
            <svg
              class="Header--header__logoSvg--26FCt"
              width="79"
              height="14"
              viewBox="0 0 79 18"
              role="img"
            >
              <title>Ueno</title>
              <path
                d="M232.29,89.534H227.6V72.463h4.688v2.788A6.009,6.009,0,0,1,237.916,72c4.61,0,6.29,3.1,6.29,6.891V89.534h-4.688V79.818c0-2.631-1.055-4.142-3.36-4.142-2.383,0-3.868,1.857-3.868,4.722v9.136ZM255,90a9,9,0,1,1,9.1-8.98C264.1,86.323,260.35,90,255,90Zm0-3.523c2.891,0,4.376-2.244,4.376-5.457,0-3.254-1.485-5.5-4.376-5.5-2.852,0-4.336,2.244-4.336,5.5C250.662,84.232,252.146,86.476,255,86.476ZM201.916,72.463H206.6V89.534h-4.688V86.746A6.009,6.009,0,0,1,196.29,90c-4.61,0-6.29-3.1-6.29-6.89V72.463h4.688V82.18c0,2.631,1.055,4.142,3.36,4.142,2.383,0,3.868-1.859,3.868-4.724V72.463Zm19.523,12.216a4.136,4.136,0,0,1-3.808,1.8,4.541,4.541,0,0,1-4.689-4.3h12.932V80.515c0-4.645-2.891-8.516-8.517-8.516a8.87,8.87,0,0,0-9.025,9.251c0,5.38,3.829,8.748,9.142,8.748,3.37,0,5.9-1.309,7.3-3.615Zm-4.121-9.274a3.865,3.865,0,0,1,3.985,3.869H213.02C213.45,77.148,214.74,75.406,217.318,75.406Zm49.328,14.5h0a2.343,2.343,0,0,1-2.354-2.331v-0.1a2.343,2.343,0,0,1,2.354-2.332h0A2.343,2.343,0,0,1,269,87.477v0.1A2.343,2.343,0,0,1,266.646,89.907Z"
                transform="translate(-190 -72)"
              ></path>
            </svg>
          </div>
          <div className="links">
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Careers</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="ham-menu">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="circle"></div>
        <div className="main-section">
          <div className="text">
            <h2 className="featured">
              <span ref={this.featured}>Featured project</span>
              <span className="box" ref={this.box}></span>
            </h2>
            <div>
              <span ref={this.span1}>Reuters</span>
              <span ref={this.span2}>News</span>
              <span ref={this.span3}>App</span>
            </div>
            <div>
              <span ref={this.span4}>News</span>
              <span ref={this.span5}>on</span>
              <span ref={this.span6}>the</span>
              <span ref={this.span7}>Move</span>
            </div>
            <div className="btn">
              <button type="button">More projects</button>
              <i className="fas fa-caret-down"></i>
            </div>
          </div>
          <div className="video" ref={this.video}>
            <video autoPlay src={orange} poster={orangePoster}></video>
          </div>
        </div>
        <div className="intro">
          <div>
            <p>
              Ueno is a full-service agency, busy designing and building
              beautiful digital products, brands, and experiences.
            </p>
            <a href="#">
              <i className="fas fa-chevron-right"></i> Contact us
            </a>
          </div>
        </div>
      </div>
    );
  }
}
