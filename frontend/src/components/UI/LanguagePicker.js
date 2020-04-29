import React from "react";

class LanguagePicker extends React.Component {
  handleOptionChange = () => {
    let selectBox = document.getElementById("selectBox");
    let index = selectBox.selectedIndex;

    if (index == 0) {
      this.props.handleLanguageChange("en");
    } else if (index == 1) {
      this.props.handleLanguageChange("es");
    } else if (index == 2) {
      this.props.handleLanguageChange("de");
    } else if (index == 3) {
      this.props.handleLanguageChange("it");
    } else if (index == 4) {
      this.props.handleLanguageChange("ar");
    }
  };
  render() {
    return (
      <div>
        <select
          className="browser-default custom-select custom-select-md mb-3"
          id="selectBox"
          onChange={this.handleOptionChange}
        >
          <option selected>Target language (English)</option>
          <option value="1">Spanish</option>
          <option value="2">German</option>
          <option value="3">Italian</option>
          <option value="4">Arabic</option>
        </select>
      </div>
    );
  }
}

export default LanguagePicker;
