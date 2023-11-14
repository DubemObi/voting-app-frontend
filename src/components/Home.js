import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import heroPhoto1 from "../img/good-faces-xmSWVeGEnJw-unsplash.jpg";
import heroPhoto2 from "../img/romario-roges-Q60IoafRrPo-unsplash-1.jpg";
import Categories from "./Categories";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      contestant: [],
      isMenu: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  componentDidMount() {
    const getContestant = async () => {
      const res = await axios.get(
        "https://voting-app-jzna.onrender.com/api/v1/contestant"
      );
      this.setState({ contestant: res.data.data.data });
    };
    getContestant();
  }
  handleMenu() {
    this.setState((state) => {
      if (!state.isMenu) {
        return { isMenu: true };
      } else {
        return { isMenu: false };
      }
    });
  }
  render() {
    const menuBar = (
      <div id="full-menubar">
        <div id="menubar">
          <FontAwesomeIcon
            icon={faXmark}
            id="menubar-icon"
            onClick={this.handleMenu}
          />
          <ul id="new-nav-links">
            <a href="#hero" onClick={this.handleMenu}>
              <li>Home</li>
            </a>
            <a href="#categories" onClick={this.handleMenu}>
              <li>Categories</li>
            </a>
            <a href="" onClick={this.handleMenu}>
              <li>About Us</li>
            </a>
            <a href="#contact" onClick={this.handleMenu}>
              <li>Contact</li>
            </a>
          </ul>
          <div id="signin-options">
            <a href="/login" id="login-button">
              Login
            </a>
            <a href="/signup">
              <button id="signup-button">Sign up</button>
            </a>
          </div>
        </div>
        <div id="behind-menubar" onClick={this.handleMenu}></div>
      </div>
    );
    return (
      <div className="home">
        {this.state.isMenu ? menuBar : !menuBar}
        <nav id="navbar-phone">
          <h1 id="logo-text">VIZI</h1>
          <FontAwesomeIcon
            icon={faBars}
            id="nav-icon"
            onClick={this.handleMenu}
          />
        </nav>
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
              <a href="/login" id="login-button">
                Login
              </a>
              <a href="/signup">
                <button id="signup-button">Sign up</button>
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
          <div id="hero-text-div">
            <h1 id="hero-text">
              THE PERFECT PLATFORM TO SHINE AND STAND-OUT BEFORE THE WORLD
            </h1>
          </div>
        </section>
        <Categories
          contestant={this.state.contestant}
          loader={this.props.loader}
          alert={this.props.alert}
          handleAlert={this.props.handleAlert}
          handleLoader={this.props.handleLoader}
        />

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
            <div>
              <h3>FIND US ON</h3>
              <div id="find-us-icons">
                <FontAwesomeIcon icon={faFacebookF} className="fu-icon" />
                <FontAwesomeIcon icon={faXTwitter} className="fu-icon" />
                <FontAwesomeIcon icon={faInstagram} className="fu-icon" />
                <FontAwesomeIcon icon={faYoutube} className="fu-icon" />
              </div>
            </div>
            <div>
              <h3 id="subscribe">SUBSCRIBE</h3>
              <input
                type="email"
                placeholder="Enter your e-mail here"
                id="email"
              />
            </div>
          </div>
        </section>
        <p id="copyright">&copy; Copyright Dubem</p>
      </div>
    );
  }
}

export default Home;
