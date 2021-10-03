import React from "react";
import Navigation from "../Header/Navigation";
import Signinpage from "../Signinpage/Signinpage";
import "./Mainpage.css";
import { useHistory } from "react-router-dom";

export default function Mainpage() {
  const history = useHistory();
  if (localStorage.getItem("user")) {
    history.push("/profile");
  }

  return (
    <div className="mainpage">
      <Navigation />
      <Signinpage />
    </div>
  );
}
