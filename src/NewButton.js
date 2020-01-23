import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class NewButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Submit
        </Button>
      </div>
    );
  }
}
export default NewButton;
