import React from "react";
import Profile from "./Profile";
import profileData from "../data/profiles.json";

export default class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }
  componentWillMount() {
    this.setState({ profiles: profileData });
  }
  render() {
    let profileList = [];
    let searchText = this.props.searchText;
    if (searchText) {
      profileList = this.state.profiles
        .filter(
          profile =>
            profile.fname.toLowerCase().includes(searchText.toLowerCase()) ||
            profile.lname.toLowerCase().includes(searchText.toLowerCase()) ||
            profile.email.toLowerCase().includes(searchText.toLowerCase())
        )
        .map(profile => <Profile key={profile.id} profile={profile} />);
    } else {
      profileList = this.state.profiles.map(profile => (
        <Profile key={profile.id} profile={profile} />
      ));
    }
    return <div className="profiles">{profileList}</div>;
  }
}
