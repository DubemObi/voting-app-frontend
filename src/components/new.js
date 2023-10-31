{
  /* {this.state.voteModal && ( */
}
<div id="vote-modal">
  <div id="modal-div">
    <h2>Number of Votes</h2>
    <hr />
    <h3 id="contestant-to-vote">
      {/* {this.state.contestantName || "Contestant name"} */}
      Contestant Name
    </h3>
    <p id="category-to-vote">Category to vote</p>
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
    <button id="checkout">Checkout</button>
  </div>
  <div id="modal-background"></div>
</div>;
{
  /* )} */
}
