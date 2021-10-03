import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="main-body">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <ul className="footer__link">
                <li> Audio</li>
                <li> Subtitles</li>
                <li>Movies</li>
                <li>TV</li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <ul className="footer__link">
                <li> Audio Discription</li>
                <li> Legal Notice</li>
                <li>Investor</li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <ul className="footer__link">
                <li> Help</li>
                <li> Jobs </li>
                <li>Cookies</li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <ul className="footer__link">
                <li> Terms</li>
                <li> Privacy </li>
                <li>Gift Cards</li>
                <li>TV</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-footer">
        {" "}
        <h5 className="footer-text">2021-Develop by Shahbaz </h5>
      </div>
    </>
  );
}
