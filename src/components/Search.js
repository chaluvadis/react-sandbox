import React from "react";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      searchText: ""
    };
  }

  componentDidMount() {
    this.search.focus();
  }

  render() {
    return (
      <div className="profile-search">
        <input
          className="search"
          ref={input => (this.search = input)}
          type="text"
          placeholder="Search Profile"
          onChange={event => this.props.onTextChange(event.target.value)}
        />
      </div>
    );
  }
}
