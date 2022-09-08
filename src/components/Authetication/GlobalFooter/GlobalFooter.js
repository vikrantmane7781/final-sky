import React from "react";
import { Link } from "react-router-dom";
import "./GlobalFooter.css";

const GlobalFooter = () => {
  return (
    <>
      <div className="globalFooter">
        <div className="globalFooterBottom">
          <span className="copyright">© 2022 Sky UK</span>
          <ul>
            <li>
              <Link to="/" className="anchor">
                Privacy &amp; Cookies Notice
              </Link>
            </li>
            <li>
              <Link to="/" className="anchor">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/" className="anchor">
                Accessibility Information
              </Link>
            </li>
            <li>
              <Link to="/" className="anchor">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GlobalFooter;
