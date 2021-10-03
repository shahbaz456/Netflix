import React from "react";
import Navigation from "../Header/Navigation";
import Profile from "../Profile/Profile";
import "./Mainprofile.css";

export default function Mainprofile() {
  return (
    <div className="main-profile">
      <Navigation />
      <Profile />
    </div>
  );
}
