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
      model: [],
      influencer: [],
      lifetime: [],
      school: [],
      isModelActive: false,
    };
    this.handleIconChange = this.handleIconChange.bind(this);
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
    console.log(this.state.contestant);
    const { influencer, model, lifetime, school } = this.state;
    console.log(influencer, model, school, lifetime);
  }
  //   async getContestant() {
  //     const res = await axios.get(
  //       "http://localhost:2009/api/v1/contestant"

  //     );
  //     // this.setState({ contestant: res });
  //     console.log(res);
  //   }
  handleIconChange() {
    this.setState((state) => {
      if (state.isModelActive) {
        return { isModelActive: false };
      } else {
        return { isModelActive: true };
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

    // console.log(this.state.contestant);

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
                    onClick={this.handleIconChange}
                  />
                </div>
                <div id="category-contestants">
                  {allContestant("fashion-lifetime-achievement-award")}
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
                    onClick={this.handleIconChange}
                  />
                </div>
              </div>
            )}
            <hr />
            <div id="category-layer">
              <div id="category-identifier">
                <div id="category-number">
                  <h4>2</h4>
                </div>
                <h2 id="category-name">FASHION LIFETIME ACHIEVEMENT AWARD</h2>
              </div>
              <FontAwesomeIcon icon={faPlus} id="category-icon" />
            </div>
            <hr />
            <div id="category-layer">
              <div id="category-identifier">
                <div id="category-number">
                  <h4>3</h4>
                </div>
                <h2 id="category-name">FASHION INFLUENCER OF THE YEAR</h2>
              </div>
              <FontAwesomeIcon icon={faPlus} id="category-icon" />
            </div>
            <hr />
            <div id="category-layer">
              <div id="category-identifier">
                <div id="category-number">
                  <h4>4</h4>
                </div>
                <h2 id="category-name">FASHION SCHOOL OF THE YEAR </h2>
              </div>
              <FontAwesomeIcon icon={faPlus} id="category-icon" />
            </div>
            <hr />
          </div>
        </section>
      </div>
    );
  }
}

export default Categories;
