import React from "react";
import "./Alert.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isOpen: true,
    };
    // this.handleOpen = this.handleOpen.bind(this);
  }
  //   handleOpen() {
  //     this.setState((state) => {
  //       return !state.isOpen;
  //     });
  //     console.log(this.state.isOpen);
  //   }

  render() {
    return (
      <>
        {this.props.alert ? (
          <div
            className="alert"
            style={{
              backgroundColor: `${
                this.props.alert === "success"
                  ? "lightgreen"
                  : this.props.alert === "error"
                  ? "red"
                  : ""
              }`,
            }}
          >
            {this.props.alert === "success" && (
                        <h4>{ this.props.message}</h4>
            )}
            {this.props.alert === "error" && <h4>{this.props.message}</h4>}
            <FontAwesomeIcon
              icon={faXmark}
              id="alert-icon"
              onClick={() => this.props.handleAlert("")}
            />
          </div>
        ) : null}
      </>
    );
  }
}

export default Alert;
