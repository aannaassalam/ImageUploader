import React, { Component, createRef } from "react";
import "./projects.css";
import card from "../../assets/card.png";
import phone from "../../assets/phone.png";
import library from "../../assets/library.webp";
import mountain from "../../assets/mountains.webp";
import athlete from "../../assets/athlete.webp";
import motor from "../../assets/clearMotion-motor.webp";
import slack from "../../assets/slack_video.mp4";
import mouse from "../../assets/mouse-and-stylus.webp";
import redbull from "../../assets/redBull.webp";
import dogFace from "../../assets/dogFace.webp";
import dropbox from "../../assets/dropbox.webp";
import wine from "../../assets/wine-video.mp4";
import phoneSfo from "../../assets/phone-sfo.webp";
import cowbox from "../../assets/cowbox-mobile.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap/gsap-core";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.pro = createRef();
  }

  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.pro.current, {
      scrollTrigger: {
        trigger: this.pro.current,
        start: "top top",
        end: "bottom bottom",
      },
      y: 20,
      ease: Power3.easeOut,
    });
  }

  render() {
    return (
      <div className="projects">
        <div className="title">
          <h3>All work, all play</h3>
          <h2>Selected projects</h2>
        </div>
        <div className="project-cont">
          <div className="project one" ref={this.pro}>
            <div className="image">
              <img src={card} className="card" />
              <img src={phone} className="phone" />
            </div>
            <div className="details">
              <h3>Zero</h3>
              <p>Development, Branding, Product, Marketing</p>
            </div>
          </div>
          <div className="project two" ref={this.pro}>
            <img src={library} className="imgs" />
            <div className="details">
              <h3>Dorsia</h3>
              <p>Branding, Product, Marketing</p>
            </div>
          </div>
          <div className="project three" ref={this.pro}>
            <img src={mountain} className="imgs" />
            <div className="details">
              <h3>Lonely Planet</h3>
              <p>Development, Product</p>
            </div>
          </div>
          <div className="project four" ref={this.pro}>
            <img src={athlete} className="imgs" />
            <div className="details">
              <h3>ESPN Body Issue</h3>
              <p>Branding, Marketing</p>
            </div>
          </div>
          <div className="project five" ref={this.pro}>
            <img src={motor} className="imgs" />
            <div className="details">
              <h3>ClearMotion</h3>
              <p>Development, Product, Branding</p>
            </div>
          </div>
          <div className="project six" ref={this.pro}>
            <video src={slack} className="imgs" autoPlay></video>
            <div className="details">
              <h3>Slack</h3>
              <p>Marketing</p>
            </div>
          </div>
          <div className="project seven" ref={this.pro}>
            <img src={mouse} className="imgs" />
            <div className="details">
              <h3>Copper</h3>
              <p>Design, Branding, Marketing</p>
            </div>
          </div>
          <div className="project eight" ref={this.pro}>
            <img src={redbull} className="imgs" />
            <div className="details">
              <h3>RedBull TV</h3>
              <p>Development, Product</p>
            </div>
          </div>
          <div className="project nine" ref={this.pro}>
            <img src={dogFace} className="imgs" />
            <div className="details">
              <h3>Google Santa Tracker</h3>
              <p>Development, Branding, Product, Marketing</p>
            </div>
          </div>
          <div className="project ten" ref={this.pro}>
            <img src={dropbox} className="imgs" />
            <div className="details">
              <h3>Dropbox Guide</h3>
              <p>Development, Marketing</p>
            </div>
          </div>
          <div className="project eleven" ref={this.pro}>
            <video src={wine} className="imgs" autoPlay></video>
            <div className="details">
              <h3>Verve</h3>
              <p>Branding, Development, Product</p>
            </div>
          </div>
          <div className="project twelve" ref={this.pro}>
            <img src={phoneSfo} className="imgs" />
            <div className="details">
              <h3>Uber Design</h3>
              <p>Development, Marketing</p>
            </div>
          </div>

          <div className="project thirteen" ref={this.pro}>
            <img src={cowbox} className="imgs" />
            <div className="details">
              <h3>Cowboy</h3>
              <p>Design, Branding</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
