import React, { Component } from "react";
import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
  }
  componentDidMount() {
    this.setState({ header: "Speaker's List", searchText: "" });
  }
  render() {
    return (
      <div className="App">
        <Header header={this.state && this.state.header} />
        <Search onTextChange={text => this.setState({ searchText: text })} />
        <Profiles searchText={this.state && this.state.searchText} />
      </div>
    );
  }
}

export default App;
