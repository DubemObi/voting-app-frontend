import React from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import bigImage from "../img/emmanuel-ikwuegbu-hPjE8wgpTPE-unsplash.jpg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    // this.state = {
    //   isLoggedIn: false,
    // };
    // this.loginUser = this.loginUser.bind(this);
  }
  // loginUser = (e) => {
  //   e.preventDefault();
  //   fetch("https://voting-app-jzna.onrender.com/api/v1/user/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: e.target.form[0].value,
  //       password: e.target.form[1].value,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((user) => {
  //       if (user.status === "success") {
  //         this.setState({ isLoggedIn: true });
  //         console.log(user);
  //       }
  //     });
  // };

  render() {
    return (
      <div className="login">
        {this.props.isLoggedIn && <Navigate to="/" replace={true} />}

        <img src={bigImage} alt="dark ladies" id="image" loading="lazy" />
        <div id="main-body">
          <div id="form-container">
            <h1 id="login-text">Login</h1>
            <form method="POST">
              <label htmlFor="email">
                Email
                <input type="email" name="email" required/>
              </label>
              <label htmlFor="password">
                Password
                <input type="password" name="password" required/>
              </label>
              <button type="submit" onClick={this.props.loginUser}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
