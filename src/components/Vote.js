import React from "react";
import "./vote.css";
import axios from "axios";
import Alert from "./Alert";

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      voteNumber: "",
      isPayModal: false,
      fullname: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    };
    this.voteNumberChange = this.voteNumberChange.bind(this);
    this.payModal = this.payModal.bind(this);
    this.fullnameChange = this.fullnameChange.bind(this);
    this.cardNumberChange = this.cardNumberChange.bind(this);
    this.expiryMonthChange = this.expiryMonthChange.bind(this);
    this.expiryYearChange = this.expiryYearChange.bind(this);
    this.cvvChange = this.cvvChange.bind(this);
    this.checkoutHandler = this.checkoutHandler.bind(this);
  }
  payModal() {
    this.setState((state) => {
      if (state.isPayModal) {
        return { isPayModal: false };
      } else {
        return { isPayModal: true };
      }
    });
  }

  fullnameChange(e) {
    this.setState({ fullname: e.target.value });
  }
  cardNumberChange(e) {
    this.setState({ cardNumber: e.target.value });
  }
  expiryMonthChange(e) {
    this.setState({ expiryMonth: e.target.value });
  }
  expiryYearChange(e) {
    this.setState({ expiryYear: e.target.value });
  }
  cvvChange(e) {
    this.setState({ cvv: e.target.value });
  }

  voteNumberChange(e) {
    this.setState({ voteNumber: e.target.value });
  }
  async checkoutHandler(e) {
    this.props.handleLoader();
    e.preventDefault();
    const formData = new FormData();
    formData.append("card_number", `${this.state.cardNumber}`);
    formData.append("cvv", `${this.state.cvv}`);
    formData.append("expiry_month", `${this.state.expiryMonth}`);
    formData.append("expiry_year", `${this.state.expiryYear}`);
    formData.append("currency", "NGN");
    formData.append("fullname", `${this.state.fullname}`);
    formData.append("email", `chidubemobinwanne@gmail.com`);
    formData.append("votes", this.state.voteNumber);
    // console.log(e.target.form[2].files[0]);
    // console.log(Cookies.get("jwt"));

    try {
      const res = await axios.post(
        `https://voting-app-jzna.onrender.com/api/v1/vote/checkout/${this.props.contestant._id}`,
        formData,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
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
      console.log(res);
    } catch (err) {
      this.props.handleAlert("error");
    }
  }

  render() {
    return (
      <div id="vote-modal">
        {this.state.isPayModal ? (
          <>
            <Alert
              alert={this.props.alert}
              handleAlert={this.props.handleAlert}
              message={
                this.props.alert === "success"
                  ? "Payment successful!"
                  : this.props.alert === "error"
                  ? "Payment failed!"
                  : ""
              }
            />
            <div id="checkout-modal">
              <h2>Card Details</h2>
              <label htmlFor="card-name">Card Name</label>
              <input
                type="text"
                id="card-name"
                value={this.state.fullname}
                onChange={this.fullnameChange}
                placeholder="Card Name"
                required
              />
              <label htmlFor="card-number">Card Number</label>
              <input
                type="text"
                id="card-number"
                placeholder="---- ---- ---- ----"
                value={this.state.cardNumber}
                onChange={this.cardNumberChange}
                maxLength="16"
                required
              />
              <div id="expiry-cvc-label">
                <div id="expiry">
                  <label htmlFor="card-expiry-month">Expiry Date</label>
                  <div id="card-expiry-div">
                    <input
                      type="text"
                      id="card-expiry-month"
                      value={this.state.expiryMonth}
                      onChange={this.expiryMonthChange}
                      maxLength={2}
                      required
                    />
                    <p id="card-expiry-seperator">/</p>
                    <input
                      type="text"
                      id="card-expiry-year"
                      value={this.state.expiryYear}
                      onChange={this.expiryYearChange}
                      maxLength={2}
                      required
                    />
                  </div>
                </div>
                <div id="cvc">
                  <label htmlFor="card-cvc">CVC/CVV</label>
                  <div id="cvc-div">
                    <input
                      type="text"
                      id="card-cvc"
                      value={this.state.cvv}
                      onChange={this.cvvChange}
                      maxLength={3}
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                id="pay-button"
                onClick={this.checkoutHandler}
                style={{
                  backgroundColor: `${this.props.loader ? "#F6D7BB" : ""}`,
                }}
              >
                Pay <div id={this.props.loader ? "button-loader" : ""}></div>
              </button>
            </div>
          </>
        ) : (
          <div id="modal-div">
            <h2>Number of Votes</h2>
            <hr />
            <h3 id="contestant-to-vote">
              {this.props.contestant.name || "Contestant name"}
            </h3>
            <p id="category-to-vote">
              {this.props.contestant.category.toUpperCase().replace(/-/g, " ")}
            </p>
            <input
              type="number"
              id="vote-number"
              onChange={this.voteNumberChange}
              placeholder="Enter Number of votes"
              value={this.state.voteNumber}
            />
            <p id="info">Vote costs #50 per vote</p>
            <hr />
            <p id="total">
              Total: <span>{this.state.voteNumber * 50}</span>
            </p>
            <button id="checkout" onClick={this.payModal}>
              Checkout
            </button>
          </div>
        )}
        <div id="modal-background" onClick={this.props.voteUser}></div>
      </div>
    );
  }
}

export default Vote;
