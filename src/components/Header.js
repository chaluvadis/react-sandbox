import React from "react";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2> {this.props.header} </h2>
      </div>
    );
  }
}
