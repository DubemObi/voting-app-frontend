import React from "react";
import "./Signup.css";
import bigImage from "../img/emmanuel-ikwuegbu-hPjE8wgpTPE-unsplash.jpg";
import { Navigate } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // this.state = {
    //   isLoggedIn: false,
    //   user: "",
    // };
    // this.signupUser = this.signupUser.bind(this);
  }
  // signupUser = (e) => {
  //   e.preventDefault();
  //   fetch("https://voting-app-jzna.onrender.com/api/v1/user/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: e.target.form[0].value,
  //       email: e.target.form[1].value,
  //       password: e.target.form[2].value,
  //       passwordConfirm: e.target.form[3].value,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((user) => {
  //       if (user.status === "success") {
  //         this.setState({ isLoggedIn: true });
  //       }
  //     });
  // };
  render() {
    return (
      <div className="signup">
        {this.props.isLoggedIn && <Navigate to="/" replace={true} />}

        <img src={bigImage} alt="dark ladies" id="image" loading="lazy" />
        <div id="main-body">
          <div id="form-container-signup">
            <h1 id="signup-text">Signup</h1>
            <form id="signup-form" autoComplete="on">
              <label htmlFor="name">
                Name
                <input type="text" name="name" required />
              </label>
              <label htmlFor="email">
                Email
                <input type="email" name="email" required />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" name="password" required />
              </label>
              <label htmlFor="confirm-password">
                Confirm Password
                <input type="password" name="confirm-password" required />
              </label>
              <button type="submit" onClick={this.props.signupUser}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
