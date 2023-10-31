import React from "react";
import "./vote.css";
import axios from "axios";

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

    const res = await axios.post(
      `http://localhost:2009/api/v1/vote/checkout/${this.props.contestant._id}`,
      formData,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "*/*",
        },
      }
    );
    console.log(res);
  }

  render() {
    return (
      <div id="vote-modal">
        {this.state.isPayModal ? (
          <div id="checkout-modal">
            <h2>Card Details</h2>
            <label htmlFor="card-name">Card Name</label>
            <input
              type="text"
              id="card-name"
              value={this.state.fullname}
              onChange={this.fullnameChange}
              required
            />
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              placeholder="---- ---- ---- ----"
              value={this.state.cardNumber}
              onChange={this.cardNumberChange}
              required
            />
            <div id="expiry-cvc-label">
              <label htmlFor="card-expiry-month">Expiry Date</label>
              <label htmlFor="card-cvc">CVC/CVV</label>
            </div>
            <div id="expiry-cvc-div">
              <div id="card-expiry-div">
                <input
                  type="text"
                  id="card-expiry-month"
                  value={this.state.expiryMonth}
                  onChange={this.expiryMonthChange}
                  required
                />
                <p id="card-expiry-seperator">/</p>
                <input
                  type="text"
                  id="card-expiry-year"
                  value={this.state.expiryYear}
                  onChange={this.expiryYearChange}
                  required
                />
              </div>
              <input
                type="text"
                id="card-cvc"
                value={this.state.cvv}
                onChange={this.cvvChange}
                required
              />
            </div>
            <button id="pay-button" onClick={this.checkoutHandler}>
              Pay
            </button>
          </div>
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
