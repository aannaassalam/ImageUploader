import React, { Component } from "react";
import "./blogs.css";

export default class Blogs extends Component {
  render() {
    return (
      <div className="blogs-cont">
        <div className="blogs">
          <div className="left">
            <h2>What’s new?</h2>
            <h3>Our blog and news</h3>
          </div>
          <div className="right">
            <div className="blog">
              <div className="blog-date">Jan 06・Blog</div>
              <h3>24,895 hours later</h3>
              <div className="readMore">
                <i className="fas fa-chevron-right"></i>
                Read More
              </div>
            </div>
            <div className="blog">
              <div className="blog-date">Oct 19・News</div>
              <h3>Figma wanted our CEO's insights for some reason</h3>
              <div className="readMore">
                <i className="fas fa-chevron-right"></i>
                Read More
              </div>
            </div>
            <div className="blog">
              <div className="blog-date">Oct 12・News</div>
              <h3>This guy really won't shut up</h3>
              <div className="readMore">
                <i className="fas fa-chevron-right"></i>
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
