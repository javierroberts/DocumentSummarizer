import React from "react";

import "./Logout.css";

class Logout extends React.Component {
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
