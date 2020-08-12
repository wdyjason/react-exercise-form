import React, { Component } from "react";
import "./myProfile.less";
import MyForm from "./MyForm";

class MyProfile extends Component {
  render() {
    return (
      <div className="whole_profile">
        <h1>My Profile</h1>
        <MyForm></MyForm>
      </div>
    );
  }
}

export default MyProfile;
