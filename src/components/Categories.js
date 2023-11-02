import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import "./vote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Vote from "./Vote";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isModelActive: true,
      isInfluencerActive: false,
      isLifetimeActive: false,
      isSchoolActive: false,
      voteModal: false,
      contestant: "",
    };
    this.handleModelIconChange = this.handleModelIconChange.bind(this);
    this.handleLifetimeIconChange = this.handleLifetimeIconChange.bind(this);
    this.handleInfluencerIconChange =
      this.handleInfluencerIconChange.bind(this);
    this.handleSchoolIconChange = this.handleSchoolIconChange.bind(this);
    this.voteUser = this.voteUser.bind(this);
    this.handleContestant = this.handleContestant.bind(this);
    this.voteOnClick = this.voteOnClick.bind(this);
  }

  handleModelIconChange() {
    this.setState((state) => {
      if (state.isModelActive) {
        return { isModelActive: false };
      } else {
        return { isModelActive: true };
      }
    });
  }

  handleInfluencerIconChange() {
    this.setState((state) => {
      if (state.isInfluencerActive) {
        return { isInfluencerActive: false };
      } else {
        return { isInfluencerActive: true };
      }
    });
  }
  handleLifetimeIconChange() {
    this.setState((state) => {
      if (state.isLifetimeActive) {
        return { isLifetimeActive: false };
      } else {
        return { isLifetimeActive: true };
      }
    });
  }
  handleSchoolIconChange() {
    this.setState((state) => {
      if (state.isSchoolActive) {
        return { isSchoolActive: false };
      } else {
        return { isSchoolActive: true };
      }
    });
  }

  voteOnClick(contestant) {
    this.handleContestant(contestant);
    this.voteUser();
  }
  handleContestant(contestant) {
    this.setState({ contestant: contestant });
    // this.voteUser();
  }

  voteUser() {
    this.setState((state) => {
      if (state.voteModal) {
        return { voteModal: false };
      } else {
        return { voteModal: true };
      }
    });
    console.log(this.state.voteModal);
  }

  render() {
    // const allContestant = (category) => {
    //   this.state.contestant &&
    //     this.state.contestant.map((contestant) => {
    //       if (contestant.category === category) {
    //         return (
    //           <div id="contestant" key={contestant.id}>
    //             <img src={contestant.photo} alt="" loading="lazy" />
    //             <div id="contestants-name">
    //               <h3 id="contestant-name">{contestant.name}</h3>
    //               <button
    //                 id="vote"
    //                 onClick={this.handleContestantName(contestant.name)}
    //               >
    //                 Vote
    //               </button>
    //             </div>
    //           </div>
    //         );
    //       }
    //     });
    // };

    return (
      <div className="categories-div">
        {this.state.voteModal && (
          <Vote contestant={this.state.contestant} voteUser={this.voteUser} />
        )}

        <section id="categories">
          <h1 id="categories-text">CATEGORIES</h1>
          <div id="categories-content">
            <hr />
            {this.state.isModelActive ? (
              <div>
                <div id="category-layer">
                  <div id="category-identifier">
                    <div id="category-number">
                      <h4>1</h4>
                    </div>
                    <h2 id="category-name">FASHION MODEL OF THE YEAR </h2>
                  </div>

                  <FontAwesomeIcon
                    icon={faMinus}
                    id="category-icon"
                    onClick={this.handleModelIconChange}
                  />
                </div>
                <div id="category-contestants">
                  {/* {allContestant("fashion-model-of-the-year")} */}
                  {this.props.contestant.map((contestant) => {
                    return contestant.category ===
                      "fashion-model-of-the-year" ? (
                      <div className="contestant" key={contestant._id}>
                        <img src={contestant.photo} alt="" loading="lazy" />
                        <div className="contestants-name">
                          <h3 className="contestant-name">{contestant.name}</h3>
                          <button
                            className="vote"
                            id={contestant._id}
                            onClick={() => this.voteOnClick(contestant)}
                            // onClick={this.handleContestantName.bind(
                            //   this,
                            //   contestant
                            // )}
                          >
                            Vote
                          </button>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ) : (
              <div>
                <div id="category-layer">
                  <div id="category-identifier">
                    <div id="category-number">
                      <h4>1</h4>
                    </div>
                    <h2 id="category-name">FASHION MODEL OF THE YEAR </h2>
                  </div>

                  <FontAwesomeIcon
                    icon={faPlus}
                    id="category-icon"
                    onClick={this.handleModelIconChange}
                  />
                </div>
              </div>
            )}
            <hr />
            {!this.state.isLifetimeActive ? (
              <div id="category-layer">
                <div id="category-identifier">
                  <div id="category-number">
                    <h4>2</h4>
                  </div>
                  <h2 id="category-name">FASHION LIFETIME ACHIEVEMENT AWARD</h2>
                </div>
                <FontAwesomeIcon
                  icon={faPlus}
                  id="category-icon"
                  onClick={this.handleLifetimeIconChange}
                />
              </div>
            ) : (
              <div>
                <div id="category-layer">
                  <div id="category-identifier">
                    <div id="category-number">
                      <h4>2</h4>
                    </div>
                    <h2 id="category-name">
                      FASHION LIFETIME ACHIEVEMENT AWARD
                    </h2>
                  </div>
                  <FontAwesomeIcon
                    icon={faMinus}
                    id="category-icon"
                    onClick={this.handleLifetimeIconChange}
                  />
                </div>
                <div id="category-contestants">
                  {/* {allContestant("fashion-lifetime-achievement-award")} */}
                  {this.props.contestant.map((contestant) => {
                    return contestant.category ===
                      "fashion-lifetime-achievement-award" ? (
                      <div className="contestant" key={contestant._id}>
                        <img src={contestant.photo} alt="" loading="lazy" />
                        <div className="contestants-name">
                          <h3 className="contestant-name">{contestant.name}</h3>
                          <button
                            className="vote"
                            id={contestant._id}
                            onClick={() => this.voteOnClick(contestant)}
                            // onClick={this.handleContestantName.bind(
                            //   this,
                            //   contestant
                            // )}
                          >
                            Vote
                          </button>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}
            <hr />
            {!this.state.isInfluencerActive ? (
              <div id="category-layer">
                <div id="category-identifier">
                  <div id="category-number">
                    <h4>3</h4>
                  </div>
                  <h2 id="category-name">FASHION INFLUENCER OF THE YEAR</h2>
                </div>
                <FontAwesomeIcon
                  icon={faPlus}
                  id="category-icon"
                  onClick={this.handleInfluencerIconChange}
                />
              </div>
            ) : (
              <div>
                <div id="category-layer">
                  <div id="category-identifier">
                    <div id="category-number">
                      <h4>3</h4>
                    </div>
                    <h2 id="category-name">FASHION INFLUENCER OF THE YEAR</h2>
                  </div>
                  <FontAwesomeIcon
                    icon={faMinus}
                    id="category-icon"
                    onClick={this.handleInfluencerIconChange}
                  />
                </div>
                <div id="category-contestants">
                  {/* {allContestant("fashion-influencer-of-the-year")} */}
                  {this.props.contestant.map((contestant) => {
                    return contestant.category ===
                      "fashion-influencer-of-the-year" ? (
                      <div className="contestant" key={contestant._id}>
                        <img src={contestant.photo} alt="" loading="lazy" />
                        <div className="contestants-name">
                          <h3 className="contestant-name">{contestant.name}</h3>
                          <button
                            className="vote"
                            id={contestant._id}
                            onClick={() => this.voteOnClick(contestant)}
                            // onClick={this.handleContestantName.bind(
                            //   this,
                            //   contestant
                            // )}
                          >
                            Vote
                          </button>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}
            <hr />
            {!this.state.isSchoolActive ? (
              <div id="category-layer">
                <div id="category-identifier">
                  <div id="category-number">
                    <h4>4</h4>
                  </div>
                  <h2 id="category-name">FASHION SCHOOL OF THE YEAR </h2>
                </div>
                <FontAwesomeIcon
                  icon={faPlus}
                  id="category-icon"
                  onClick={this.handleSchoolIconChange}
                />
              </div>
            ) : (
              <div>
                <div id="category-layer">
                  <div id="category-identifier">
                    <div id="category-number">
                      <h4>4</h4>
                    </div>
                    <h2 id="category-name">FASHION SCHOOL OF THE YEAR</h2>
                  </div>
                  <FontAwesomeIcon
                    icon={faMinus}
                    id="category-icon"
                    onClick={this.handleSchoolIconChange}
                  />
                </div>
                <div id="category-contestants">
                  {/* {allContestant("fashion-school-of-the-year")} */}
                  {this.props.contestant.map((contestant) => {
                    return contestant.category ===
                      "fashion-school-of-the-year" ? (
                      <div className="contestant" key={contestant._id}>
                        <img src={contestant.photo} alt="" loading="lazy" />
                        <div className="contestants-name">
                          <h3 className="contestant-name">{contestant.name}</h3>
                          <button
                            className="vote"
                            id={contestant._id}
                            onClick={() => this.voteOnClick(contestant)}
                            // onClick={this.handleContestantName.bind(
                            //   this,
                            //   contestant
                            // )}
                          >
                            Vote
                          </button>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}
            <hr />
          </div>
        </section>
      </div>
    );
  }
}

export default Categories;
