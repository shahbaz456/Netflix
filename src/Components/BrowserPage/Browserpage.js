import React from "react";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Navigation from "../Header/Navigation";
import "./Browserpage.css";

export default function Browserpage() {
  return (
    <div className="browser-page">
      <Navigation />
      <Body />
      <Footer />
    </div>
  );
}
