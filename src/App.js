import React, { Component } from "react";
import "./App.css";
import Rolodex from "./component/Rolodex";

class App extends Component {
  state = {
    results : []
  };

  fetchData = () => {
    fetch("https://randomuser.me/api?results=25")
      .then(response => response.json())
      .then(parsedJSON => {
        console.log(parsedJSON.results);
        this.setState({ results: parsedJSON.results });
      })
      .catch(error => console.log("parsing failed", error));
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return <div className="main">
    <Rolodex rollo
    results = {this.state.results}
    />
    </div>;
  }
}

export default App;
