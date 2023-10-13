import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      contestant: [],

      isModelActive: true,
      isInfluencerActive: false,
      isLifetimeActive: false,
      isSchoolActive: false,
    };
    this.handleModelIconChange = this.handleModelIconChange.bind(this);
    this.handleLifetimeIconChange = this.handleLifetimeIconChange.bind(this);
    this.handleInfluencerIconChange =
      this.handleInfluencerIconChange.bind(this);
    this.handleSchoolIconChange = this.handleSchoolIconChange.bind(this);
  }
  componentDidMount() {
    const getContestant = async () => {
      const res = await axios.get("http://localhost:2009/api/v1/contestant");
      this.setState({ contestant: res.data.data.data });

      //   res.data.data.data.map((contestant) => {
      //     console.log(contestant.category);
      //     if (contestant.category === "fashion-influencer-of-the-year") {
      //       this.setState({ influencer: [...contestant] });
      //     } else if (contestant.category === "fashion-model-of-the-year") {
      //       this.setState({ model: [...contestant] });
      //     } else if (
      //       contestant.category === "fashion-lifetime-achievement-award"
      //     ) {
      //       this.setState({ lifetime: [...contestant] });
      //     } else if (contestant.category === "fashion-school-of-the-year") {
      //       this.setState({ school: [...contestant] });
      //     }
      //   });
    };
    getContestant();
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

  render() {
    const allContestant = (category) => {
      return this.state.contestant.map((contestant) => {
        if (contestant.category === category) {
          return (
            <div id="contestant" key={contestant.id}>
              <img src={contestant.photo} alt="" loading="lazy" />
              <div id="contestants-name">
                <h3 id="contestant-name">{contestant.name}</h3>
                <button id="vote">Vote</button>
              </div>
            </div>
          );
        }
      });
    };

    return (
      <div>
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
                  {allContestant("fashion-model-of-the-year")}
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
                  {allContestant("fashion-lifetime-achievement-award")}
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
                      <h4>2</h4>
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
                  {allContestant("fashion-influencer-of-the-year")}
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
                      <h4>2</h4>
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
                  {allContestant("fashion-school-of-the-year")}
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
