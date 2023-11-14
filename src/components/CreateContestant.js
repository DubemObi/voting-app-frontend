import React from "react";
import axios from "axios";
import "./CreateContestants.css";
import Cookies from "js-cookie";
import Alert from "./Alert";

class CreateContestants extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "",
      category: "",
      photo: [],
    };
    this.createContestant = this.createContestant.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
  }
  handlePhotoChange(e) {
    this.setState({ photo: [e.target.form[2].files[0]] });
  }
  async createContestant(e) {
    this.props.handleLoader();
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", `${e.target.form[0].value}`);
    formData.append("category", `${e.target.form[1].value}`);
    formData.append("photo", this.state.photo[0]);
    // console.log(e.target.form[2].files[0]);
    // console.log(Cookies.get("jwt"));
    try {
      const res = await axios.post(
        "https://voting-app-jzna.onrender.com/api/v1/contestant",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
            Authorization: `Bearer: ${Cookies.get("jwt")}`,
            Accept: "*/*",
          },
        }
      );
      if (res) {
        this.props.handleLoader();
        if (res.data.status === "success") {
          this.props.handleAlert("success");
        } else {
          this.props.handleAlert("error");
        }
      }
    } catch (error) {
      this.props.handleAlert("error");
    }
    // fetch("http://localhost:2009/api/v1/contestant", {
    // fetch("https://voting-app-jzna.onrender.com/api/v1/contestant", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: e.target.form[0].value,
    //     photo: e.target.form[2].value,
    //     category: e.target.form[1].value,
    //   }),
    //   body: formData,

    //   headers: {
    // "Content-type": "application/json; charset=UTF-8",
    //     Authorization: `Bearer: ${Cookies.get("jwt")}`,
    //     "Set-Cookie": `${Cookies.get("jwt")}`,
    //     Accept: "*/*",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((constestant) => {
    //     console.log(constestant);
    //     if (constestant.status === "success") {
    //       //   setIsLoggedIn(true);
    //       //   setUserAccount(user);
    //     }
    //   });
  }
  render() {
    return (
      <div id="create-contestants">
        <Alert
          alert={this.props.alert}
          handleAlert={this.props.handleAlert}
          message={
            this.props.alert === "success"
              ? "You have successfully created a contestant!"
              : this.props.alert === "error"
              ? "Failed to create contentant! "
              : ""
          }
        />
        {/* {this.props.isLoggedIn && <Navigate to="/" replace={true} />} */}
        <form action="" id="contestants-form">
          <h1 id="add-text">Add Contestant</h1>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="category">Category</label>
          <select name="category" id="category" required>
            <option value="--">Select an option</option>
            <option value="fashion-model-of-the-year">
              Fashion Model of the Year
            </option>
            <option value="fashion-lifetime-achievement-award">
              Fashion Lifetime Achievement Award
            </option>
            <option value="fashion-influencer-of-the-year">
              Fashion Influencer of the Year
            </option>
            <option value="fashion-school-of-the-year">
              Fashion School of the Year
            </option>
          </select>
          <label htmlFor="image">Photo</label>
          <input type="file" onChange={this.handlePhotoChange} required />
          <button
            id="submit-contestant"
            onClick={this.createContestant}
            style={{
              backgroundColor: `${this.props.loader ? "#F6D7BB" : ""}`,
            }}
          >
            Submit <div id={this.props.loader ? "button-loader" : ""}></div>
          </button>
        </form>
        <div id="background-tint"></div>
      </div>
    );
  }
}

export default CreateContestants;
