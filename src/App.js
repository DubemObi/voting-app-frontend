import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CreateContestants from "./components/CreateContestant";
import Cookies from "js-cookie";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAccount, setUserAccount] = useState({});
  const [cookies, setCookies] = useState("");
  const signupUser = (e) => {
    e.preventDefault();
    fetch("https://voting-app-jzna.onrender.com/api/v1/user/signup", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.form[0].value,
        email: e.target.form[1].value,
        password: e.target.form[2].value,
        passwordConfirm: e.target.form[3].value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.status === "success") {
          setIsLoggedIn(true);
          setUserAccount(user);
        }
      });
  };
  const loginUser = (e) => {
    e.preventDefault();
    fetch("https://voting-app-jzna.onrender.com/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: e.target.form[0].value,
        password: e.target.form[1].value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.status === "success") {
          setIsLoggedIn(true);
          setUserAccount(user);
          // console.log(user.data.user.email);
          // const SetCookie = () => {
          Cookies.set("jwt", `${user.token}`, {
            expires: 3,
          });
          // alert(Cookies.get("jwt"));
          setCookies(Cookies.get());

          // };
        }
      });
  };
  console.log(cookies.jwt);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home userAccount={userAccount} />}
        ></Route>
        <Route
          path="signup"
          element={<Signup signupUser={signupUser} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="login"
          element={
            <Login
              loginUser={loginUser}
              isLoggedIn={isLoggedIn}
              userCookies={cookies}
            />
          }
        />
        <Route
          path="contestant"
          element={<CreateContestants userCookies={cookies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
