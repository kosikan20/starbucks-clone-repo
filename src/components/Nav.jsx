import React from "react";
import { NavLink } from "react-router-dom";
import starbucks from "../assets/starbucks.png";
function Nav() {
  return (
    <div className="nav">
      <NavLink className="navlink logo" to="/">
        <img src={starbucks} alt="starbucks" />
      </NavLink>
      <NavLink className="navlink" to="/menu">
        Menu
      </NavLink>
      <NavLink className="navlink" to="/rewards">
        Rewards
      </NavLink>
      <NavLink className="navlink" to="/gift">
        Gift cards
      </NavLink>
      <NavLink className="navlink store" to="/findstore">
        FindStore
      </NavLink>
      <NavLink className="navlink signin" to="/signin">
        Sign in
      </NavLink>
      <NavLink className="navlink signup" to="/signup">
        Join now
      </NavLink>
    </div>
  );
}

export default Nav;
