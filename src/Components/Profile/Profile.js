import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../Assets/images/avatar.png";
import "./Profile.css";

export default function Profile() {
  return (
    <div className=" profile-div">
      <h1 className="head">Who's watching ?</h1>

      <Link to="/browse">
        <img className="avatar" src={avatar} alt="ava" />
      </Link>

      <h3 className="heading">Shahbaz </h3>
    </div>
  );
}
