import React from "react";
import ReactDOM from "react-dom";

import "./Logout.css";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.props.closeHandler();
    }
  };
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">Logout?</div>
          <input
            type="submit"
            className="fadeIn fourth"
            value="Logout"
            onClick={this.props.logoutHandler}
          />
        </div>
      </div>
    );
  }
}

export default Logout;
