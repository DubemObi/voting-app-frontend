import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import heroPhoto1 from "../img/good-faces-xmSWVeGEnJw-unsplash.jpg";
import heroPhoto2 from "../img/romario-roges-Q60IoafRrPo-unsplash.jpg";
import Categories from "./Categories";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="home">
        <nav id="navbar">
          <h1 id="logo-text">VIZI</h1>
          <ul id="nav-links">
            <a href="#hero">
              <li>Home</li>
            </a>
            <a href="#categories ">
              <li>Categories</li>
            </a>
            <a href="">
              <li>About us</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
          {!this.props.userAccount.data ? (
            <div id="signin-options">
              <a href="/login" id="login">
                Login
              </a>
              <a href="/signup">
                <button id="signup">Sign up</button>
              </a>
            </div>
          ) : (
            <div id="email-avatar">
              <p>{this.props.userAccount.data.user.email}</p>
              <div id="avatar">
                <FontAwesomeIcon icon={faUser} id="avatar-icon" />
              </div>
            </div>
          )}
        </nav>
        <section id="hero">
          <div id="hero-photos">
            <div id="photo-container1">
              <img
                src={heroPhoto1}
                alt="lady photo"
                id="hero-photo1"
                loading="lazy"
              />
            </div>
            <div id="photo-container2">
              <img
                src={heroPhoto2}
                alt="male model photo"
                id="hero-photo2"
                loading="lazy"
              />
            </div>
          </div>
          <h1 id="hero-text">
            THE PERFECT PLATFORM TO SHINE AND STAND-OUT BEFORE THE WORLD
          </h1>
        </section>
        <Categories />

        <section id="contact">
          <div className="contact-links">
            <h3>CATEGORIES</h3>
            <p>Fashion Model</p>
            <p>Lifetime Achievement</p>
            <p>Fashion School</p>
            <p>Fashion Influencer</p>
          </div>
          <div className="contact-links">
            <h3>COMPANY</h3>
            <p>About us</p>
            <p>Contestants</p>
            <p>Awards</p>
            <p>Press</p>
          </div>
          <div className="contact-links">
            <h3>SUPPORT</h3>
            <p>Contact us</p>
            <p>Legal & Privacy</p>
            <p>Payments</p>
            <p>Feedbacks</p>
          </div>
          <div id="find-us">
            <h3>FIND US ON</h3>
            <div id="find-us-icons">
              <FontAwesomeIcon icon={faFacebookF} className="fu-icon" />
              <FontAwesomeIcon icon={faXTwitter} className="fu-icon" />
              <FontAwesomeIcon icon={faInstagram} className="fu-icon" />
              <FontAwesomeIcon icon={faYoutube} className="fu-icon" />
            </div>
            <h3>SUBSCRIBE</h3>
            <input
              type="email"
              placeholder="Enter your e-mail here"
              id="email"
            />
          </div>
        </section>
        <p id="copyright">&copy; Copyright Dubem</p>
      </div>
    );
  }
}

export default Home;
