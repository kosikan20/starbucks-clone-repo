import React from "react";
import { NavLink } from "react-router-dom";
function FooterNavLink() {
  return (
    <div className="fnl">
      <a
        href="https://www.starbucks.com/terms/privacy-policy/"
        className="link"
      >
        Privacy Notice
      </a>
      <p className="sep">|</p>
      <a
        href="https://www.starbucks.com/terms/starbucks-terms-of-use/"
        className="link"
      >
        Terms of Use
      </a>
      <p className="sep">|</p>
      <a href="https://www.starbucks.com/personal-information" className="link">
        Do Not Share My Personal Information
      </a>
      <p className="sep">|</p>
      <a
        href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf"
        className="link"
      >
        CA Supply Chain Act
      </a>
      <p className="sep">|</p>
      <a href="#" className="link">
        Cookie Preferences
      </a>
    </div>
  );
}

export default FooterNavLink;
