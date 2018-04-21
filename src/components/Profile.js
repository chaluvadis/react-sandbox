import React from "react";
export default class Profile extends React.Component {
  render() {
    const profile = this.props.profile;
    return (
      <div className="profile">
        <div className="profile-image">
          <img src={profile.pic} alt="" />
        </div>
        <div className="profle-names">
          <div className="fname">
            {profile.fname}, {profile.lname}
          </div>
        </div>
        <div className="profile-email">{profile.email}</div>
        <div className="profile-address">
          {profile.city} {profile.state}, {profile.zip}
        </div>
      </div>
    );
  }
}
