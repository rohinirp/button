import React, { Component } from "react";
import TextName from "./TextName";
import NewButton from "./NewButton";
import Drpdwn from "./Drpdwn";
import NewMessage from "./NewMessage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <TextName />
        </div>
        <div>
          <NewMessage />
        </div>
        <div>
          <Drpdwn />
        </div>
        <div>
          <NewButton />
        </div>
      </div>
    );
  }
}
export default Home;
